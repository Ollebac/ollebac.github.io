import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App';
import Navbar from './components/Nav/Nav';
import Home from './components/Home';

import reportWebVitals from './reportWebVitals';

// const navigation = ReactDOM.createRoot(document.getElementById('nav-container'))
const content = ReactDOM.createRoot(document.getElementById('content'));

// ReactDOM.render(<App />, document.getElementById('root'));



// navigation.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

content.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
