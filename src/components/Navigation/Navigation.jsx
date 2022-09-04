import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


import logo from './../../assets/img/logo.png'
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="eventiv-slider">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="fixed-top eventiv-navigation"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className='img-fluid' height='30px' width='40px' alt="" />
            Eventiv Pro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/user-dashboard">User Dashboard</Nav.Link> 
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Event Ticketing</Nav.Link>
              <Nav.Link href="#1">Event Management</Nav.Link>
              <Nav.Link href="#2">Pricing</Nav.Link>
              <Nav.Link href="#3">FAQ</Nav.Link>
              <Nav.Link href="#4">Contact Us</Nav.Link>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/signup-details">Sign Up Details</NavDropdown.Item>
                <NavDropdown.Item href="/company-name">Company Name</NavDropdown.Item>
                <NavDropdown.Item href="/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item href="/register">
                  Register
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/login" className="eventiv-login-btn">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
