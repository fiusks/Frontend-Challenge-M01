import "./style.scss";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/index";
import Header from "../header";

function Layout() {
  return (
    <Container fluid className="p-0">
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Container>
  );
}

export default Layout;
