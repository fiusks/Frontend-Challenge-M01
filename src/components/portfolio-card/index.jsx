import "./style.scss";
import { Row, Col } from "react-bootstrap";

function PorfolioCard({ img, children, flexDirection }) {
  return (
    <Row
      className={`card-container mb-5 ${flexDirection ? flexDirection : ""}`}
    >
      <Col xl={6} className="card-image">
        <img
          src={img}
          alt="rafael profile picture"
          className="img-fluid about-me-img"
        />
      </Col>
      <Col xl={6}>
        <div className="card-content">{children}</div>
      </Col>
    </Row>
  );
}
export default PorfolioCard;
