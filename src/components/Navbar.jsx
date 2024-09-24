import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";




const TopNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-warning py-3">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://www.lejhro.com/lejhro_logo_white.png"
            alt="Lejhro Logo"
            style={{ width: '200px', marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#innovations" className="text-white mx-2">Innovations</Nav.Link>
            <Nav.Link href="#business-services" className="text-white mx-2">Business Services</Nav.Link>
            <Nav.Link href="#financial-services" className="text-white mx-2">Financial Services</Nav.Link>
            <Nav.Link href="#bootcamp" className="text-white mx-2">Bootcamp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;

