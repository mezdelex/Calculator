import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import { App } from './pages/App';
import { Store } from './utils/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>
);