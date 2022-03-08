import "./style.scss";
import { Nav, Navbar, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import trianglesIcon from "../../assets/images/trianglesHeader.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import githubIcon from "../../assets/images/githubIcon.svg";

function Footer() {
  return (
    <Row className="gx-0">
      <Col>
        <Navbar bg="dark" expand="lg" className="layout-footer">
          <Navbar.Brand as={Link} to="home">
            <img src={trianglesIcon} alt="logo icon" id="triangles-footer" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navigation-links ">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand href="https://github.com/fiusks">
            <img src={githubIcon} alt="logo icon" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img src={linkedinIcon} alt="logo icon" />
          </Navbar.Brand>
        </Navbar>
      </Col>
    </Row>
  );
}

export default Footer;
