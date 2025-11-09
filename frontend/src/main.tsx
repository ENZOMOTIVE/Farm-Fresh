import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'
import './utils/i18n.ts';





const google_auth = "518176702540-38d5pkshbhbb805ro84lfd1dp6de0fi5.apps.googleusercontent.com"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <GoogleOAuthProvider clientId={google_auth}>
      <BrowserRouter>
        <App />
      
      </BrowserRouter>
    
    </GoogleOAuthProvider>
    
  </StrictMode>
);
