import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Know from './Know.tsx';
import './index.css';

createRoot(document.getElementById('knowledge')!).render(
  <StrictMode>
    <Know />
  </StrictMode>
);