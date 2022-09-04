import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import LogoDF from "../../Images/default.png";
import { Link } from "react-router-dom";

function TopNavbars() {
  return (
    <Navbar className="fixed-top" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="w-75" navbarScroll>
            <Nav.Link to="/" className="text-light fs-5 fw-light ms-5">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/tvshow"
              className="text-light fs-5 fw-light ms-3"
            >
              TV Shows
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/movies"
              className="text-light fs-5 fw-light ms-3"
            >
              Movies
            </Nav.Link>
          </Nav>

          <Navbar.Brand
            href="#"
            className="d-flex justify-content-center"
            style={{ width: "100%" }}
          >
            <img alt="logo" />
          </Navbar.Brand>

          <Button variant="light" className="text-danger fw-bold me-3 px-5">
            Register
          </Button>
          <Button variant="dark" className="bg-danger me-5 fw-bold px-5">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbars;
