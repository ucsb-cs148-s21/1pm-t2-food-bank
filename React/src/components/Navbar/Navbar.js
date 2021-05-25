import React, { useState } from 'react';

import './Navbar.css'
import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import{Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar(props) {
    const user = props.user;

    const [clicked, setClicked] = useState(false);


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
                    <Nav.Link to={"/"} className='nav-links'>Home</Nav.Link>
                    <Nav.Link to={"/inventory"} className='nav-links'>Inventory</Nav.Link>
                    {user && <Nav.Link to={"/"} className='nav-links'>Staff Portal</Nav.Link>}
                    <Nav.Link to={"/contactus"} className='nav-links'>Contact Us</Nav.Link>
                    {!user ? (
                        <div className="nav-links-mobile" id="login-button" />) : (
                        <NavDropdown className="nav-links-mobile"
                            title={
                            <span>
                                Hello, {user.givenName}{" "}
                                <img
                                src={user.imageUrl}
                                alt="profile"
                                style={{ width: "24px", height: "24px" }}
                                />{" "}
                            </span>
                            }
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item className="nav-links-mobile" onClick={user.signOut}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        )}
                </ul>
            </nav>
    )

}

// import React, { Component } from 'react';

// import './Navbar.css'
// import { Link } from 'react-router-dom';


// export default class Navbar extends Component {

//     state = { clicked: false}

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }

    

//     render() {
//         return (
//             <nav className="NavbarItems">
//                 <h1 className="navbar-logo">UCSB Food Bank<i className="fas fa-hamburger"></i></h1>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     <Link to={"/"} className='nav-links'>Home</Link>
//                     <Link to={"/inventory"} className='nav-links'>Inventory</Link>
//                     <Link to={"/"} className='nav-links'>Staff Portal</Link>
//                     <Link to={"/contactus"} className='nav-links'>Contact Us</Link>
//                     <Link to={"/login"} className='nav-links-mobile'>Login</Link>
//                 </ul>
//             </nav>
//         )
//     }
// }