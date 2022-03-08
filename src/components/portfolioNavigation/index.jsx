import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import arrowRight from "../../assets/images/arrowRight.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";

function PortfolioNavigation() {
  const location = useLocation();

  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    const pages = ["manage", "bookmark", "insure", "fylo"];
    function navigatePages() {
      const pageIndex = pages.indexOf(
        location.pathname.replace("/portfolio/", "")
      );
      if (pageIndex === 0) {
        setNextPage("bookmark");
        setPreviousPage("fylo");
        return;
      } else if (pageIndex === 3) {
        setNextPage("manage");
        setPreviousPage("insure");
        return;
      }
      setNextPage(pages[pageIndex + 1]);
      setPreviousPage(pages[pageIndex - 1]);
      return;
    }
    navigatePages();
  }, [nextPage, previousPage, location.pathname]);

  return (
    <Container>
      <Row className="portfolio-nav-container">
        <Col
          as={Link}
          to={`/portfolio/${previousPage}`}
          className="left-nav-container"
        >
          <img src={arrowLeft} alt="arrow left" />
          <div as={Link} className="left-nav">
            <h3>
              {previousPage.charAt(0).toUpperCase() + previousPage.slice(1)}
            </h3>
            <p>Previous Section</p>
          </div>
        </Col>
        <Col
          as={Link}
          to={`/portfolio/${nextPage}`}
          className="right-nav-container"
        >
          <img src={arrowRight} alt="arrow Right" />
          <div as={Link} className="right-nav">
            <h3>{nextPage.charAt(0).toUpperCase() + nextPage.slice(1)}</h3>
            <p>Next Section</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioNavigation;
