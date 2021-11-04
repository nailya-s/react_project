import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
  <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

