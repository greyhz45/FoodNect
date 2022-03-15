import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';

ReactDOM.render(
  // <React.StrictMode> //show strict errors
  //  ... ...
  //</React.StrictMode>
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);