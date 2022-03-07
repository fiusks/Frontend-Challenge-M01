import "./style.scss";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/index";
import Header from "../header";

function Layout() {
  return (
    <Container fluid>
      <Row>
        <Col className="px-0">
          <Header />
        </Col>
      </Row>
      <Container>
        <Outlet />
      </Container>
      <Row>
        <Col className="px-0">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
