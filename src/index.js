import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import statement for our app 
import App from './App';

// Takes App component and renders into our HTML page

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


