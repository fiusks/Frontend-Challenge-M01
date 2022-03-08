import "./style.scss";
import { Row, Col } from "react-bootstrap";

function PorfolioCard({ img, children, flexDirection }) {
  return (
    <Row className={`card-container ${flexDirection ? flexDirection : ""}`}>
      <Col xl={6} className="card-image">
        <img src={img} alt="rafael profile" className="img-fluid" />
      </Col>
      <Col xl={6} className="col-card-content">
        <div className="card-content">{children}</div>
      </Col>
    </Row>
  );
}
export default PorfolioCard;
