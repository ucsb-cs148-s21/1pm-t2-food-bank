import React from 'react';
import Login from './components/Login/Login';
import Home_Content from "./components/Home_Content/Home_Content"
import './App.css';
import history from "./components/history"

import { Router, Route, Switch } from "react-router";
import Inventory from './components/Inventory/Inventory';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home_Content} />
        </Switch>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="/inventory" component={Inventory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
