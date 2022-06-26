import logo from '../FINAL LOGO.svg';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router,
    Link
} from 'react-router-dom';

class NavBar extends Component {
    render() {
    return (
                    <div className='row'>
                        <div className='md-9'>
                            <Navbar bg="light"  sticky="top" expand="lg md">
                                <Navbar.Brand restricted={false} as={Link} to={{ pathname: "/home"}}><img src={logo} alt="Flamingo Consultancy" width="200" id='logo' />
                                </Navbar.Brand>
                                <Navbar.Toggle  />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto ms-auto justify-content-end">
                                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                        <NavDropdown title="Services" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to={"/immigration"}>Immigration</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to={"/company"}>Company formation</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to={"/compliance"}>Regulatory compliance</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item as={Link} to={"/government"}>Government liaison</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link restricted={false} as={Link} to={"/about"}>About Us</Nav.Link>
                                        <Nav.Link restricted={false} as={Link} to={"/contacts"}>Contacts</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                </div>
        );
    }
}

export default NavBar;