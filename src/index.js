import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  // react-snap prerendered content — hydrate instead of re-render
  hydrateRoot(rootElement, <React.StrictMode><App /></React.StrictMode>);
} else {
  createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>);
}
