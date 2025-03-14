import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import App from './App.tsx';


const rootElement = document.getElementById('root'); // Ensure this matches your HTML file

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); 
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
