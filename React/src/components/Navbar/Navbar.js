import React, { useEffect, Component } from 'react';

import './Navbar.css'
import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import{Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class NavBar extends Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">UCSB Food Bank<i className="fas fa-hamburger"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Link to={"/"} className='nav-links'>Home</Link>
                    <Link to={"/inventory"} className='nav-links'>Inventory</Link>
                    <Link to={"/"} className='nav-links'>Staff Portal</Link>
                    <Link to={"/contactus"} className='nav-links'>Contact Us</Link>
                    <Link to={"/login"} className='nav-links-mobile'>Login</Link>
                </ul>
            </nav>
        )
    }
}