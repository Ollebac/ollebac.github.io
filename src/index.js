import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import NavBar from './Nav';
import Intro from './/components/Intro';
import Work from './Work';
import App from './App';

import reportWebVitals from './reportWebVitals';

const navigation = ReactDOM.createRoot(document.getElementById('nav-menu'))
const content = ReactDOM.createRoot(document.getElementById('content'));

navigation.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
)

content.render(
  <React.StrictMode>

    <Intro />
    <Work />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
