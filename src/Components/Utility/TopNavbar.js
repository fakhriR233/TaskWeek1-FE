import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

function TopNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="active top-navbar">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tvshows" className="top-navbar">
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/movies" className="top-navbar">
              Movies
            </Nav.Link>
          </Nav>

          <Button variant="light" className="mx-3">
            Register
          </Button>
          <Button variant="danger">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
