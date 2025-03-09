
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Error boundary for the entire app
const renderApp = () => {
  try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      console.error("Root element not found");
      return;
    }

    createRoot(rootElement).render(<App />);
    console.log("App mounted successfully");
  } catch (error) {
    console.error("Failed to render the application:", error);
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center; font-family: sans-serif;">
          <h1>Something went wrong</h1>
          <p>The application failed to load. Please try refreshing the page.</p>
          <p style="color: red;">Error: ${error instanceof Error ? error.message : String(error)}</p>
        </div>
      `;
    }
  }
};

renderApp();
