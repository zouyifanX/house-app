import React from 'react';
import {HashRouter,Switch,Route,Redirect } from 'react-router-dom'
import Main from './pages/main/main'
import Loadable from 'react-loadable'


const Loading = ()=><div>加载中...</div>

const Login = Loadable({
  loader:()=>import(/*webpackChunkName:'login'*/'./pages/login'),
  loading:Loading
})
const Reg = Loadable({
  loader:()=>import(/*webpackChunkName:'reg'*/'./pages/reg'),
  loading:Loading
})
const Forgot = Loadable({
  loader:()=>import(/*webpackChunkName:'forgot'*/'./pages/forgot'),
  loading:Loading
})


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/reg' exact component={Reg}/>
        <Route path='/forgot' exact component={Forgot}/>
        <Redirect to='/'/>
      </Switch> 
    </HashRouter>
  );
}

export default App;
