import "./style.scss";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import trianglesIcon from "../../assets/images/trianglesHeader.svg";

function Header() {
  return (
    <Row className="gx-0">
      <Col>
        <Navbar expand="lg" className="layout-header">
          <div className="header-logo-container">
            <Navbar.Brand as={NavLink} to="home">
              <img src={trianglesIcon} alt="logo icon" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center navigation-links">
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
        </Navbar>
      </Col>
    </Row>
  );
}

export default Header;
