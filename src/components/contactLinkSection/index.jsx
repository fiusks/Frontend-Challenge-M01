import "./style.scss";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function ContactLinkSection() {
  return (
    <Row className="contact-link-container">
      <Col xl={6} className="contact-message">
        <h2>Interessado em fazer projetos comigo?</h2>
      </Col>
      <Col xl={6} className="contact-btn">
        <Button as={Link} to="/contact" variant="outline-primary-dark">
          Contact
        </Button>
      </Col>
    </Row>
  );
}

export default ContactLinkSection;
