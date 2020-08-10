import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MyRouter from './pages/myRouter/myRouter'
import lazy from './util/lazy'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={lazy(() => import('./pages/login/login'))}></Route>
        <Route path='/reg' component={lazy(() => import('./pages/reg/reg'))}></Route>
        <MyRouter path='/index' component={lazy(() => import('./pages/index/index'))}></MyRouter>
        <MyRouter path='/goodsDetail' component={lazy(() => import('./pages/goodsDetail/goodDetail'))}></MyRouter>
        <MyRouter path='/fenleiDetail/:id/:name' component={lazy(() => import('./pages/fenleiDetail/fenleiDetail'))}></MyRouter>
        <Redirect to="/login"></Redirect>
      </div>
    );
  }

}

export default App;
