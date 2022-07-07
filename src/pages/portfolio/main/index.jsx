import "./style.scss";
import { Link } from "react-router-dom";
import PorfolioCard from "../../../components/portfolio-card";
import { Button, Row, Col } from "react-bootstrap";
import portfolioDindin from '../../../assets/images/portfolioDindin.png'
import portfolioCubosFlix from "../../../assets/images/portfolioCubosFlix.jpg";
import portfolioInsure from "../../../assets/images/portfolioInsure.png";
import portfolioFylo from "../../../assets/images/portfolioFylo.png";
import { useTranslation, Trans } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <Row>
      <Col className="portfolio-card">

      <PorfolioCard img={portfolioDindin} >
          <h2>Dindin</h2>
          <p>{t("portfolio_dindin_text")}</p>
          <Button variant="outline-primary-dark" href="https://mydindin.netlify.app/" target="_blank">
            {t("generic_show_project")}
          </Button>
        </PorfolioCard>

        <PorfolioCard img={portfolioCubosFlix} flexDirection="row-reverse">
          <h2>Cubos Flix</h2>
          <Trans>
            <p>{t("portfolio_cubos_text")}</p>
          </Trans>

          <Button variant="outline-primary-dark" href="https://cubosflix-byfiusks.netlify.app/" target="_blank">
            {t("generic_show_project")}
          </Button>
        </PorfolioCard>



        <PorfolioCard img={portfolioFylo} >
          <h2>Account Book</h2>
          <p>{t("portfolio_paycheck_text")}</p>
          <Button variant="outline-primary-dark" as={Link} to="paycheck">
            {t("generic_show_project")}
          </Button>
        </PorfolioCard>
      </Col>
    </Row>
  );
}

export default Portfolio;
