import React, { Component } from 'react'
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div class="login-pg">
                <form action="">
                    <h2 className="login">Log in</h2>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="submit" className="loginButton" value="Login"></input>
                </form>  
            </div>
        )
    }
}

export default Login;
