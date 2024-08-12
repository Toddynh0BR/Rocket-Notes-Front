import { StrictMode } from 'react';
import GlobalStyle from './style/global';
import { createRoot } from 'react-dom/client';

import { Routes } from './Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
      <Routes />
  </StrictMode>,
)
