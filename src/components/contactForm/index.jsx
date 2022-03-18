import "./style.scss";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Row, Col, Button } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const schema = yup.object().shape({
  name: yup.string().required("The field Name is required"),
  email: yup
    .string()
    .email("Insert a valid e-mail")
    .required("The field Email is required"),
  message: yup.string().required("The field Message is required"),
});

function ContactForm() {
  const { t } = useTranslation();
  const mailForm = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        mailForm.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
        },
        () => {
          alert(
            "Ocorreu um erro no envio. Tente novamente ou prossiga por outro canal de comunicação"
          );
        }
      );
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={() => sendEmail()}
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className="contact-form-container"
          ref={mailForm}
        >
          <Row>
            <Form.Group as={Col} controlId="validationFormikName">
              <Form.Label>{t("contact_form_name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={touched.name && !!errors.name}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="validationFormikEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email@email.com"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="validationFormikMessage">
              <Form.Label>{t("contact_form_message")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
                placeholder={t("contact_form_message_placeholder")}
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={touched.message && !!errors.message}
                isValid={touched.message && !errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">{t("contact_form_submit")}</Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
