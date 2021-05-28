import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Home_Content from "./components/Home_Content/Home_Content"
import Contact_Us from "./components/Contact_Us/Contact_Us"
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Staff from './components/Staff/Staff';
import { Container } from 'react-bootstrap';

import CheckingSignedIn from "./pages/CheckingSignedIn";
import Profile from "./pages/Profile";
import Private from "./pages/Private";
import PageNotFound from "./pages/PageNotFound";


export default function App()  {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => initGoogleSignIn();
    document.body.appendChild(script);
  }, [isSignedIn]);

  function initGoogleSignIn() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
        })
        .then(() => {
          const authInstance = window.gapi.auth2.getAuthInstance();
          const isSignedIn = authInstance.isSignedIn.get();
          setIsSignedIn(isSignedIn);

          authInstance.isSignedIn.listen((isSignedIn) => {
            setIsSignedIn(isSignedIn);
          });
        });
    });
    window.gapi.load("signin2", () => {
      window.gapi.signin2.render("login-button", {
        theme: "light",
      });
    });
  }

  function PrivateRoute(props) {
    const { component, ...rest } = props;
    if (isSignedIn === null) {
      return <CheckingSignedIn />;
    }
    return (
      <Route
        {...rest}
        component={isSignedIn ? component : Private}
      />
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home_Content} />
          <Route path="/inventory"exact component={Inventory} />
          <Route path="/staff"exact component={Staff} />
          <Route path="/contactus"exact component={Contact_Us} />
          <Route path="/login"exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
