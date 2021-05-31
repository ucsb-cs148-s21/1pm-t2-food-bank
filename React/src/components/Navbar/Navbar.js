import React, { useState, useEffect } from 'react';

import './Navbar.css'
import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import{Nav, Navbar, NavDropdown } from "react-bootstrap";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

export default function NavBar(props) {
    const user = props.user;

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
		if (window.gapi) {
			window.gapi.load("signin2", () => {
				window.gapi.signin2.render("login-button", {
				  theme: "light",
				});
			});
		}
	});

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">UCSB Food Bank<i className="fas fa-hamburger"></i></h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Link to="/" className='nav-links'>Home</Link>
                    <Link to="/inventory" className='nav-links'>Inventory</Link>
                    <Link to="/contactus" className='nav-links'>Contact</Link>
                    {user && user.Membership && user.Admin && <Link to="/staff" className='nav-links'>Staff Portal</Link>}
                    {!user ? (
                        <div className="login-button" id="login-button" />) : (

                        <NavDropdown className="nav-links-mobile"
                            title={
                            <span>
                                Hi, {user.givenName}{" "}
                                <img
                                src={user.imageUrl}
                                alt="profile"
                                style={{ width: "24px", height: "24px" }}
                                />{" "}
                            </span>
                            }
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item>
                                <p><br /></p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<ExitToAppIcon />}
                                    onClick={user.signOut}
                                >
                                    Logout
                                </Button>
                            </NavDropdown.Item>
                        </NavDropdown>
                    )}
                </ul>
            </nav>
    )

}