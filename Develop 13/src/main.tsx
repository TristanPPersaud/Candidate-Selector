import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import App from './App.tsx';


const rootElement = document.getElementById('root'); // Ensure this matches your HTML file

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create a root for React 18 and later
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
