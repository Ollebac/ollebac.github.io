import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const webpage = ReactDOM.createRoot(document.getElementById('webpage'));

webpage.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();