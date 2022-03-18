import "./style.scss";
import { Link } from "react-router-dom";
import PorfolioCard from "../../../components/portfolio-card";
import { Button, Row, Col } from "react-bootstrap";
import portfolioMain from "../../../assets/images/portfolioMain.png";
import portfolioCubosFlix from "../../../assets/images/portfolioCubosFlix.jpg";
import portfolioInsure from "../../../assets/images/portfolioInsure.png";
import portfolioFylo from "../../../assets/images/portfolioFylo.png";
import { useTranslation, Trans } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <Row>
      <Col className="portfolio-card">
        <PorfolioCard img={portfolioMain}>
          <h2>{t("portfolio_portfolio_name")}</h2>
          <p>{t("portfolio_portfolio_text")}</p>
          <Button variant="outline-primary-dark" as={Link} to="portfolio">
            {t("generic_show_project")}
          </Button>
        </PorfolioCard>

        <PorfolioCard img={portfolioCubosFlix} flexDirection="row-reverse">
          <h2>Cubos Flix</h2>
          <Trans>
            <p>{t("portfolio_cubos_text")}</p>
          </Trans>

          <Button variant="outline-primary-dark" as={Link} to="cubosflix">
            {t("generic_show_project")}
          </Button>
        </PorfolioCard>

        <PorfolioCard img={portfolioInsure}>
          <h2>DinDin</h2>
          <p>{t("portfolio_dindin_text")}</p>
          <Button variant="outline-primary-dark" as={Link} to="dindin">
            {t("generic_show_project")}
          </Button>
        </PorfolioCard>

        <PorfolioCard img={portfolioFylo} flexDirection="row-reverse">
          <h2>PayCheck</h2>
          <p>
            <p>{t("portfolio_paycheck_text")}</p>
          </p>
          <Button variant="outline-primary-dark" as={Link} to="paycheck">
            {t("generic_show_project")}
          </Button>
        </PorfolioCard>
      </Col>
    </Row>
  );
}

export default Portfolio;
