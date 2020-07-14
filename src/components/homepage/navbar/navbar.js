import React from "react";
import './Navbar.css'
import {
  Nav,
  Navbar,
  Container,
  Row, NavDropdown
} from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function CustomNavbar() {

  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch({type: "LOGIN", payload: {showLogin: true}})
  }

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown title="BREEDS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Toy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Small</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Large</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="RESOURCES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" onClick={handleLogin}>LOGIN</Nav.Link>
            <Nav.Link> | </Nav.Link>
            <Nav.Link>SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
}
