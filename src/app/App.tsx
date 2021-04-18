import React, { ElementType } from 'react';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import Login from '../pages/login/login';
import ActionBar from '../components/ActionBar/ActionBar';
import MobileNav from '../components/NavBar/MobileNav';
import { Register } from '../pages/register/register';

type User = {
  id: number;
} | null
interface INavRoute {
  exact?: boolean,
  path: string, 
  user: User
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

const NavRoute= ({user, exact, path, component}: INavRoute) => {
  return (
    <GuardedRoute auth={!!user} exact={exact} path={path} component={(props) =>  (
      <div className='flex flex-row relative'>
        <NavBar />
        <ActionBar />
        <MobileNav />
        { React.createElement(component, props) }
      </div>   
    )}/>
  )
}
const AuthenticationRoutes = () => (
  <div className='h-full'>
    <Route exact path="/" render={() => <Redirect to="login" /> } />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </div>
)

function App() {
  let user = {id:121}
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/(login|register)?" component={AuthenticationRoutes}/>
        <NavRoute user={user}path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
