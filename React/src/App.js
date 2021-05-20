import React from 'react';
import Login from './components/Login/Login';
import Home_Content from "./components/Home_Content/Home_Content"
import Contact_Us from "./components/Contact_Us/Contact_Us"
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={Home_Content} />
          <Route path="/inventory"exact component={Inventory} />
          <Route path="/contactus"exact component={Contact_Us} />
          <Route path="/login"exact component={Login} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
