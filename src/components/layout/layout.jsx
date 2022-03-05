import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/index";
import Header from "../header";

function Layout() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
