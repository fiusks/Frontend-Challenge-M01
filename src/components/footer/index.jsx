import "./style.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
