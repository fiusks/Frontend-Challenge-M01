import "./style.scss";
import { Row, Col } from "react-bootstrap";
import ContactForm from "../../components/contactForm";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <Row>
      <Col>
        <Row className="contact-information">
          <Col xl={6}>
            <h2>{t("contact_title")}</h2>
          </Col>
          <Col xl={6}>
            <p>{t("contact_text")}</p>
            <div></div>
          </Col>
        </Row>
        <Row className="contact-form">
          <Col xl={6}>
            <h2>{t("generic_contact")}</h2>
          </Col>
          <Col xl={6}>
            <ContactForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Contact;
