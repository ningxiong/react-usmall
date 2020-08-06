import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/css/reset.css'
import "./assets/js/rem.js"

// React.Component.prototype.$img = 'http://localhost:3000'

import {HashRouter} from 'react-router-dom'
ReactDOM.render(
  <HashRouter><App /></HashRouter>
  ,
  document.getElementById('root')
);
