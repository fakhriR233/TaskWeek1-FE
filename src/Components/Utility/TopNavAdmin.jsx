import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Images/DumbflixLogo.png";
import User from "../../Images/User-Icon.png";

function TopNavbarAdmin() {
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
            <Navbar.Brand href="#action1" className="active top-navbar">
              <img
                src={Logo}
                width="115"
                height="35"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Nav>

          <img
            src={User}
            width="40"
            height="40"
            className="rounded-circle"
            alt="User Icons"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbarAdmin;
