import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { GlobalStyles } from './global-styles'
import App from './App';
import Navbar from "./components/Navbar/Navbar"


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="App">
                <Navbar />
                <App />
                <FooterContainer />
            </div>
        </Router>
    </React.StrictMode>,
document.getElementById('root'));

