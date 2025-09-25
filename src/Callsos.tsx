import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Sos from './Sos.tsx';
import './index.css';

createRoot(document.getElementById('sos')!).render(
  <StrictMode>
    <Sos />
  </StrictMode>
);