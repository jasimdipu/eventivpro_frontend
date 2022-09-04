import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { IoIosArrowDown } from "react-icons/io";
import './topNav.css'


const TopNav = () => {
  return (
    <div className="userDashboard">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='userNav'>
        <Container fluid>
          <Navbar.Brand href="/" className="eventive-logo-dashboard">Eventiv Pro</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <h3 className="text-light middle-text">Fetures Events</h3>
            <Nav className="ms-auto"> 
            <Nav.Link>Features</Nav.Link>
              <NavDropdown title={<IoIosArrowDown />} className='me-5' id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
