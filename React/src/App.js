import React from 'react';
import Login from './components/Login/Login';
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
      </Router>
    </div>
  );
}

export default App;
