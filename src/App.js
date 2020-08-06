import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import lazy from './util/lazy'
function App() {
  return (
    <div className="App">
      <Route path='/login' component={lazy(()=>import('./pages/login/login'))}></Route>
      <Route path='/reg' component={lazy(()=>import('./pages/reg/reg'))}></Route>
      <Route path='/index' component={lazy(()=>import('./pages/index/index'))}></Route>
      <Redirect to="/login"></Redirect>
    </div>
  );
}

export default App;
