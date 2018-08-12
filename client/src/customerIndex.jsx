import React from 'react';
import ReactDOM from 'react-dom';
import CustomerApp from './components/customer/CustomerApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <CustomerApp />
  </BrowserRouter>
), document.getElementById('app'));