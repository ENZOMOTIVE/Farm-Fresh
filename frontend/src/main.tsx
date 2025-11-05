import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'
import './utils/i18n.ts';





const google_auth = import.meta.env.VITE_GOOGLE_AUTH


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <GoogleOAuthProvider clientId={google_auth}>
      <BrowserRouter>
        <App />
      
      </BrowserRouter>
    
    </GoogleOAuthProvider>
    
  </StrictMode>
);
