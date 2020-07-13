import React from "react";
import './navbar.css'
import {
  Nav,
  Navbar,
  Container,
  Row
} from "react-bootstrap";

export default function navbar() {
  return (
    <Row>
      <Navbar className="col-sm-12" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navbar-a">
              <Nav>
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#breeders">BREEDERS</Nav.Link>
                <Nav.Link href="#health">HEALTH & CARE</Nav.Link>
                <Nav.Link href="#pups">PUPPIES</Nav.Link>
                <Nav.Link href="#services">SERVICES</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}
