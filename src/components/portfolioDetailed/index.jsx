import "./style.scss";
import { Row, Col } from "react-bootstrap";

function PortfolioDetailed({
  mainImg,
  projectResume,
  projectDescription,
  secondaryImg,
  auxiliarImg,
}) {
  return (
    <Row>
      <Col className="porfolio-subpage">
        <Row>
          <Col className="hero-section">
            <img src={mainImg} alt="Project example wide" />
          </Col>
        </Row>
        <Row className="main-section-container">
          <Col xl={6}>
            <div className="aside-section">{projectResume}</div>
          </Col>
          <Col xl={6}>
            <div className="main-section">
              <h3>Project</h3>
              {projectDescription}
              <h3>Static Previews</h3>
              <img src={secondaryImg} alt="Project example small" />
              <img src={auxiliarImg} alt="Project example small" />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default PortfolioDetailed;
