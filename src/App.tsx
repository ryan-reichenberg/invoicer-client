import React from 'react';
import Chart from './components/Chart/Chart';
import Card from './components/Card/Card';
import './App.css';
import { ChartData, ChartOptions } from 'chart.js';
import NavBar from './components/NavBar/NavBar';
import { Route, Router, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import { createBrowserHistory } from 'history';


function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/about">
          About
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
