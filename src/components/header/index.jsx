import "./style.scss";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import trianglesIcon from "../../assets/images/trianglesHeader.svg";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../languageDropdown";
function Header() {
  const { t } = useTranslation();
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
                {t("nav_portfolio_link")}
              </Nav.Link>
              <Nav.Link as={NavLink} to="contact">
                {t("generic_contact")}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <LanguageDropdown />
        </Navbar>
      </Col>
    </Row>
  );
}

export default Header;
