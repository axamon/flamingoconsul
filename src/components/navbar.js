import logo from '../logo.png';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom';
import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import Immigration from './Immigration';

class NavBar extends Component {
    render() {
    return (
            <div className='container bg-white vh-95'>
                <Router>
                    <div className='row'>
                        <div className='md-9'>
                            <Navbar bg="light"  sticky="top" expand="lg md">
                                <Navbar.Brand as={Link} to={"/home"}><img src={logo} alt="Flamingo Consultancy" width="200"  />
                                </Navbar.Brand>
                                <Navbar.Toggle  />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto ms-auto justify-content-end">
                                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                        <NavDropdown title="Services" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/immigration">Immigration</NavDropdown.Item>
                                            <NavDropdown.Item href="/company-formation">Company formation</NavDropdown.Item>
                                            <NavDropdown.Item href="/reguatory-compliance">Regulatory compliance</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/government-liaison">Government liaison</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                                        <Nav.Link as={Link} to={"/contacts"}>Contacts</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                    <div className='no-title item-page row'>
                        <h4>Immigration and Regulatory Compliance Experts</h4>
                        <hr></hr>
                    </div>
                    <Routes className='row'>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/immigration" element={<Immigration />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default NavBar;