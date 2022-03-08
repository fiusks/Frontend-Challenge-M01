import "./style.scss";
import { Row, Col } from "react-bootstrap";
import ContactForm from "../../components/contactForm";

function Contact() {
  return (
    <Row>
      <Col>
        <Row className="contact-information">
          <Col xl={6}>
            <h2>Entre em contato</h2>
          </Col>
          <Col xl={6}>
            <p>
              Eu adoraria escutar sobre seu trabalho atual e como eu poderia
              ajudar. Atualmente estou procurando por um cargo e aberto para
              várias oportunidades. Minha preferência é uma oportunidade em uma
              empresa Britânica. Mas também estou feliz em escutar sobre
              oportunidades remotas. Sou uma pessoa trabalhadora e positiva que
              sempre fará as tasks com um senso de propósito e atenção aos
              detalhes. Fique livre para checar meu perfis abaixo e entrar em
              contato utilizando o formulário.
            </p>
            <div></div>
          </Col>
        </Row>
        <Row className="contact-form">
          <Col xl={6}>
            <h2>Contato</h2>
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
