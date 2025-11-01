/**
 * Contact Form Worker
 * Handles portfolio contact form submissions with email validation and delivery
 */

interface Env {
  EVALIDATE_API_KEY: string;
  PURELYMAIL_API_KEY?: string;
  PURELYMAIL_SMTP_USER?: string;
  PURELYMAIL_SMTP_PASS?: string;
  CONTACT_EMAIL: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface EmailValidationResult {
  email: string;
  severity: string;
  isValid: boolean;
  score: number;
  checks: {
    syntax: { passed: boolean; message: string };
    domain: { passed: boolean; message: string };
    mxRecords: { passed: boolean; message: string };
    disposable: { passed: boolean; message: string };
    catchAll: { passed: boolean; message: string };
    roleBased: { passed: boolean; message: string };
  };
  recommendations: string[];
  processingTime: number;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://andreacozart.me',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      // Parse form data
      const formData: ContactFormData = await request.json();

      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      // Validate email using evalidate
      const emailValidation = await validateEmail(formData.email, env);

      if (!emailValidation.isValid) {
        return new Response(
          JSON.stringify({
            error: 'Invalid email address',
            details: emailValidation.recommendations[0] || 'Please provide a valid email address',
          }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      // Check for disposable emails
      if (!emailValidation.checks.disposable.passed) {
        return new Response(
          JSON.stringify({
            error: 'Disposable email addresses are not allowed',
            details: 'Please use a permanent email address',
          }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      // Send email via PurelyMail
      const emailSent = await sendEmail(formData, env);

      if (!emailSent) {
        throw new Error('Failed to send email');
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Thank you for your message! I\'ll get back to you soon.',
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.error('Contact form error:', error);
      return new Response(
        JSON.stringify({
          error: 'Failed to send message',
          details: 'Please try again later or email directly at andrea@cozyartzmedia.com',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
  },
};

/**
 * Validate email using evalidate API
 */
async function validateEmail(
  email: string,
  env: Env
): Promise<EmailValidationResult> {
  const response = await fetch('https://evalidate.andrea-b56.workers.dev/validate', {
    method: 'POST',
    headers: {
      'X-API-Key': env.EVALIDATE_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    // Fallback to basic validation if service unavailable
    const basicRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
      email,
      severity: 'warning',
      isValid: basicRegex.test(email),
      score: basicRegex.test(email) ? 50 : 0,
      checks: {
        syntax: { passed: basicRegex.test(email), message: 'Basic validation' },
        domain: { passed: true, message: 'Not checked' },
        mxRecords: { passed: true, message: 'Not checked' },
        disposable: { passed: true, message: 'Not checked' },
        catchAll: { passed: true, message: 'Not checked' },
        roleBased: { passed: true, message: 'Not checked' },
      },
      recommendations: ['Validation service unavailable - using basic check'],
      processingTime: 0,
    };
  }

  return await response.json();
}

/**
 * Send email via PurelyMail
 * Using MailChannels API (Cloudflare Workers compatible)
 */
async function sendEmail(formData: ContactFormData, env: Env): Promise<boolean> {
  // Email content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #1f2937; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0;">From your portfolio website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">From:</div>
              <div class="value">${escapeHtml(formData.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${formData.email}">${escapeHtml(formData.email)}</a></div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(formData.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Sent from andreacozart.me contact form</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission
From your portfolio website

From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from andreacozart.me contact form
  `.trim();

  // Using MailChannels API (free for Cloudflare Workers)
  // This works without needing SMTP
  const mailChannelsResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: env.CONTACT_EMAIL || 'andrea@cozyartzmedia.com' }],
          dkim_domain: 'andreacozart.me',
          dkim_selector: 'mailchannels',
        },
      ],
      from: {
        email: 'noreply@andreacozart.me',
        name: 'Portfolio Contact Form',
      },
      reply_to: {
        email: formData.email,
        name: formData.name,
      },
      subject: `New Contact Form: ${formData.name}`,
      content: [
        {
          type: 'text/plain',
          value: textContent,
        },
        {
          type: 'text/html',
          value: htmlContent,
        },
      ],
    }),
  });

  return mailChannelsResponse.ok;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
