import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/css/reset.css'
import "./assets/js/rem.js"


import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'

React.Component.prototype.$img = 'http://localhost:3000'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter><App /></HashRouter>
  </Provider>

  ,
  document.getElementById('root')
);
