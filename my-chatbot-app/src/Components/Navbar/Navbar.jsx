import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/CSS/bootstrap.min.css';
import "../../assets/CSS/navbar.css";

function AppNavbar() {
  return (
   
    <Navbar expand="lg" variant='dark'>
      
   
      <Container fluid>
         
       
      <Navbar.Brand href="/" className='mr-auto'>
      
      <img
        src="../src/assets/Images/GRT_logo.png" 
        width="100%"
        height="100%"
        className="d-inline-block align-top grt-logo"
        alt="GRT Logo"
        
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
       
          <Nav className="ml-auto">
            <Nav.Link className="nav-links hover-underline" href="/insights">INSIGHTS</Nav.Link>
            <Nav.Link className="nav-links hover-underline" href="/services">SERVICES</Nav.Link>
            <Nav.Link  className="nav-links hover-underline" href="/career">CAREERS</Nav.Link>
            <Nav.Link  className="nav-links hover-underline" href="/connect">CONNECT</Nav.Link>
          </Nav>
       
        
        </Navbar.Collapse>
        </Container>
       
    </Navbar>
 
  );
}

export default AppNavbar;
