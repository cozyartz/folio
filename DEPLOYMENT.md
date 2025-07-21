# Deployment Setup

This project is configured to automatically deploy to Cloudflare Pages when changes are pushed to the `main` branch.

## Required GitHub Secrets

To enable automatic deployment, add these secrets to your GitHub repository settings:

1. **CLOUDFLARE_API_TOKEN**
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Create a token with "Cloudflare Pages:Edit" permissions
   - Add this token as a GitHub secret

2. **CLOUDFLARE_ACCOUNT_ID**
   - Get your account ID from Cloudflare Dashboard
   - Add this as a GitHub secret

## Cloudflare Pages Setup

1. Create a Cloudflare Pages project named `andreacozart-me`
2. Connect your custom domain `andreacozart.me` in the Pages settings
3. The GitHub Action will handle deployments automatically

## Workflow

The deployment workflow:
- Triggers on pushes to `main` branch
- Installs dependencies with `npm ci`
- Runs linting with `npm run lint`
- Builds the project with `npm run build`
- Deploys the `dist` folder to Cloudflare Pages

## Manual Deployment

If needed, you can also deploy manually using Wrangler CLI:
```bash
npm run build
npx wrangler pages deploy dist --project-name=andreacozart-me
```