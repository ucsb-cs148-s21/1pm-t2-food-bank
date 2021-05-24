import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { FooterContainer } from "./components/footer/footer"


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="App">
                <div className='contents'>
                <App />
                </div>
                <FooterContainer />
            </div>
        </Router>
    </React.StrictMode>,
document.getElementById('root'));

