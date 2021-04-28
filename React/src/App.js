import React from 'react';
import Login from './components/Login/Login';
import Home_Content from "./components/Home_Content/Home_Content"
import { FooterContainer } from "./containers/footer"
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Container>
        <Switch>
          <Route path="/" exact component={Home_Content} />
        </Switch>
        <Switch>
          <Route path="/inventory"exact component={Inventory} />
        </Switch>
        <Switch>
          <Route path="/login"exact component={Login} />
        </Switch>
      </Container>
=======
      <Navbar />
      <Home_Content />
      <FooterContainer />
>>>>>>> 4411c1fd (fixed padding issues)
    </div>
  );
}

export default App;
