"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #ffffff;
    --text: #000000;
    --text-light: #555555;
    --accent: #f0f0f0;
    --border: #e0e0e0;
    --primary: #3498db;
    --secondary: #2c3e50;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: &apos;Inter&apos;, sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInFromBottom {
    from { 
      transform: translateY(20px);
      opacity: 0;
    }
    to { 
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`

export default GlobalStyles

