import "./style.scss";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ContactLinkSection() {
  const { t } = useTranslation();
  return (
    <Row className="contact-link-container">
      <Col xl={6} className="contact-message">
        <h2>{t("contact_link_section_text")}</h2>
      </Col>
      <Col xl={6} className="contact-btn">
        <Button as={Link} to="/contact" variant="outline-primary-dark">
          {t("generic_contact")}
        </Button>
      </Col>
    </Row>
  );
}

export default ContactLinkSection;
