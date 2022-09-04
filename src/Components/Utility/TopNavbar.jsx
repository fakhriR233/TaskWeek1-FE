import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalRegister from "../Modal";
import ModalLogin from "../ModalLogin";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Images/DumbflixLogo.png";

function TopNavbar() {
  let Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function homeHandler() {
    Navigate("/");
  }

  function tvHandler() {
    Navigate("/tvshows");
  }
  function moviesHandler() {
    Navigate("/movies");
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={homeHandler} className="active top-navbar">
                Home
              </Nav.Link>
              <Nav.Link onClick={tvHandler} className="top-navbar">
                TV Shows
              </Nav.Link>
              <Nav.Link onClick={moviesHandler} className="top-navbar">
                Movies
              </Nav.Link>
            </Nav>

            <Navbar.Brand
              onClick={homeHandler}
              className="d-flex justify-content-center"
              style={{ width: "60%" }}
            >
              <img src={Logo} alt="logo" className="nav-img-center" />
            </Navbar.Brand>

            <Button variant="light" className="mx-3" onClick={handleShow}>
              Register
            </Button>
            <Button variant="danger" onClick={handleShowLogin}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalRegister setShow={setShow} show={show} />
      <ModalLogin setShowLogin={setShowLogin} showLogin={showLogin} />
    </>
  );
}

export default TopNavbar;
