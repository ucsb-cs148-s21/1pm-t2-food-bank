import React from 'react';
import Login from './components/Login/Login';
import Home_Content from "./components/Home_Content/Home_Content"
import './App.css';
import history from "./components/history"

import { Router, Route, Switch } from "react-router";


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="" component={Home_Content} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
