import "./style.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import trianglesIcon from "../../assets/images/trianglesHeader.svg";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="teste">
          <Navbar.Brand href="#home">
            <img src={trianglesIcon} alt="logo icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
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

export default Header;
