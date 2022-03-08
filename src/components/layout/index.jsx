import "./style.scss";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../footer/index";
import Header from "../header";
import ContactLinkSection from "../contactLinkSection";

function Layout() {
  const location = useLocation();
  return (
    <Container fluid className="p-0">
      <Header />
      <Container>
        <Outlet />
      </Container>
      {location.pathname !== "/contact" ? (
        <Container>
          <ContactLinkSection />
        </Container>
      ) : (
        ""
      )}
      <Footer />
    </Container>
  );
}

export default Layout;
