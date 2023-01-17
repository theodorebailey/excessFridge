import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import styling
import "bulma/css/bulma.min.css";
// import statement for our app 
import App from './App';

import { BrowserRouter } from 'react-router-dom'; 

// Takes App component and renders into our HTML page

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


