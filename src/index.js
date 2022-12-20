import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Se llama a App.js que contiene todos los componentes del dashboard
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
