import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import styling
import "bulma/css/bulma.min.css";
// import statement for our app 
import App from './App';

// import browser router from react router dom to remove page referesh
import { BrowserRouter } from 'react-router-dom'; 

// Takes App component and renders into our HTML page

// const root refers to HTML index
// strict mode provides warning messages
// Browser router allows use of Route elements 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


