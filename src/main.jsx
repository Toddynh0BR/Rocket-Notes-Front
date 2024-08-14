import { StrictMode } from 'react';
import GlobalStyle from './style/global';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './hooks/auth';

import { Routes } from './Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
     <AuthProvider> 
      <Routes />
     </AuthProvider> 
  </StrictMode>,
)
