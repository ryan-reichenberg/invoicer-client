import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';


function App() {
  const history = createBrowserHistory();
  return (
    <div className="flex flex-row">
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
