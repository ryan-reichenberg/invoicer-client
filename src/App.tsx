import React, { ElementType } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import ActionBar from './components/ActionBar/ActionBar';
import MobileNav from './components/NavBar/MobileNav';

interface User {
  id: number;
}
interface INavRoute {
  exact?: boolean,
  path: string, 
  user: User | null
  component: ElementType
}
interface IGuardedRoute {
  exact?: boolean,
  auth: boolean
  path: string, 
  component: ElementType
}
const GuardedRoute = ({ component, auth, ...rest }: IGuardedRoute) => (
  <Route {...rest} render={(props) => (
      auth === true
          ? React.createElement(component, props)
          : <Redirect to='/' />
  )} />
)

const NavRoute= ({user, exact, path, component, ...props}: INavRoute) => {
  return (
    <GuardedRoute auth={!!user} exact={exact} path={path} component={() =>  (
      <div className='flex flex-row relative'>
        <NavBar />
        <MobileNav />
        { React.createElement(component, props) }
      </div>   
    )}/>
  )
}
const LoginRoute = () => (
  <div>
    <Route exact path="/">
      <Route exact path="/" render={() => <Redirect to="login" /> } />
      <Route path="/login" component={Login} />
    </Route>
  </div>
)

function App() {
  let user = {id:121}
  let user2 = null;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/(login)?" component={LoginRoute}/>
        <Route path="/register" component={Login} />
        <NavRoute user={user2} path='/clients' component={Login}/>
        <NavRoute user={user}path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
