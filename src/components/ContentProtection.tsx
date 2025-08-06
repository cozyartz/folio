import { useEffect } from 'react';

const ContentProtection: React.FC = () => {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection with mouse
    const disableSelection = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable copy/cut/paste shortcuts
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // Disable Ctrl+A, Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+S, Ctrl+P, F12
      if (e.ctrlKey && (
        e.key === 'a' || e.key === 'A' ||
        e.key === 'c' || e.key === 'C' ||
        e.key === 'x' || e.key === 'X' ||
        e.key === 'v' || e.key === 'V' ||
        e.key === 's' || e.key === 'S' ||
        e.key === 'p' || e.key === 'P'
      )) {
        e.preventDefault();
        return false;
      }

      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
    };

    // Disable drag and drop
    const disableDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('selectstart', disableSelection);
    document.addEventListener('dragstart', disableDrag);
    document.addEventListener('keydown', disableKeyboardShortcuts);

    // Additional protection against console access
    const disableConsole = () => {
      // Disable common console methods
      (console as any).log = () => {};
      (console as any).warn = () => {};
      (console as any).error = () => {};
      (console as any).info = () => {};
      (console as any).debug = () => {};
      (console as any).clear = () => {};
    };

    // Apply console protection
    disableConsole();

    // Add CSS to prevent text selection
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      
      /* Prevent image dragging */
      img {
        -webkit-user-drag: none !important;
        -moz-user-drag: none !important;
        user-drag: none !important;
        pointer-events: none !important;
      }

      /* Hide text when selected (additional protection) */
      ::selection {
        background: transparent !important;
      }
      
      ::-moz-selection {
        background: transparent !important;
      }

      /* Disable print styles */
      @media print {
        * {
          display: none !important;
        }
        body::after {
          content: "This content is protected and cannot be printed.";
          display: block !important;
          text-align: center;
          font-size: 24px;
          margin-top: 50vh;
        }
      }
    `;
    document.head.appendChild(style);

    // DevTools detection
    let devtools = {
      open: false,
      orientation: null as string | null
    };

    const threshold = 160;

    const detectDevTools = () => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          // Redirect or take action when dev tools are detected
          document.body.innerHTML = `
            <div style="
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: #1e293b;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: system-ui, -apple-system, sans-serif;
              z-index: 999999;
            ">
              <div style="text-align: center;">
                <h1>Content Protected</h1>
                <p>This portfolio content is protected. Please view it normally.</p>
                <button onclick="window.location.reload()" style="
                  background: #3b82f6;
                  color: white;
                  padding: 12px 24px;
                  border: none;
                  border-radius: 8px;
                  margin-top: 20px;
                  cursor: pointer;
                ">Reload Page</button>
              </div>
            </div>
          `;
        }
      } else {
        devtools.open = false;
      }
    };

    // Check for dev tools every 500ms
    const devToolsInterval = setInterval(detectDevTools, 500);

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('selectstart', disableSelection);
      document.removeEventListener('dragstart', disableDrag);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      clearInterval(devToolsInterval);
      document.head.removeChild(style);
    };
  }, []);

  // Add copyright notice
  useEffect(() => {
    const addCopyrightNotice = () => {
      console.clear();
      console.log(`
        %c🚨 CONTENT PROTECTION NOTICE 🚨
        
        This portfolio belongs to Andrea Cozart-Lundin.
        All content is protected by copyright.
        
        Unauthorized copying, distribution, or use is prohibited.
        
        © 2025 Andrea Cozart-Lundin / Cozyartz Media Group
        `,
        'color: #ef4444; font-size: 16px; font-weight: bold; background: #1e293b; padding: 20px; border: 2px solid #ef4444;'
      );
    };

    addCopyrightNotice();
    // Re-add notice every 5 seconds
    const copyrightInterval = setInterval(addCopyrightNotice, 5000);

    return () => clearInterval(copyrightInterval);
  }, []);

  return null; // This component doesn't render anything visible
};

export default ContentProtection;