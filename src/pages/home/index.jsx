import "./style.scss";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PorfolioCard from "../../components/portfolio-card";
import profilepicture from "../../assets/images/Me.jpg";
import homeImage from "../../assets/images/homeimage.png";
import arrowDown from "../../assets/images/arrowDown.png";
import { useTranslation, Trans } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <Row>
      <Col className="home-container">
        <Row className="hero-container">
          <Col className="home-hero-section ">
            <img src={homeImage} alt="monitor with open app inside" />
            <div className="hero-section-text">
              <h1>{t("home_welcome_portfolio")}</h1>
              <Button as={"a"} href="#about-me" className="about-me-btn">
                <img src={arrowDown} alt="arrow down icon" />
                {t("home_about_me")}
              </Button>
            </div>
          </Col>
        </Row>
        <PorfolioCard img={profilepicture}>
          <h1 id="about-me">{t("home_about_me")}</h1>
          <p style={{ textAlign: "justify" }}>
            <Trans>{t("home_about_me_text")}</Trans>
          </p>
          <Button
            as={Link}
            to="/portfolio"
            variant="outline-primary-dark"
            className="home-card-btn"
          >
            {t("generic_go_to_portfolio")}
          </Button>
        </PorfolioCard>
      </Col>
    </Row>
  );
}

export default Home;
