import "./style.scss";
import { Nav, Navbar, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import trianglesIcon from "../../assets/images/trianglesHeader.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import githubIcon from "../../assets/images/githubIcon.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
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
                {t("nav_portfolio_link")}
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                {t("generic_contact")}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand href="https://github.com/fiusks">
            <img src={githubIcon} alt="logo icon" />
          </Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/rafabarros1/">
            <img src={linkedinIcon} alt="logo icon" />
          </Navbar.Brand>
        </Navbar>
      </Col>
    </Row>
  );
}

export default Footer;
