import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// // import 'font-awesome/css/font-awesome.css';


ReactDOM.render(
  <BrowserRouter>
  <App />,
  </BrowserRouter>,
  document.getElementById('root')
);
