import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Базові стилі
import typescriptLogo from './typescript.svg';
import { setupCounter } from './counter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);