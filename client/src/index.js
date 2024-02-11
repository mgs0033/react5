import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './perfil.css';
import './publicaciones.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App, null)
  )
);

reportWebVitals();
