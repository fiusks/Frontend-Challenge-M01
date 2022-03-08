import "./style.scss";
import { Link } from "react-router-dom";
import PorfolioCard from "../../../components/portfolio-card";
import { Button, Row, Col } from "react-bootstrap";
import portfolioManage from "../../../assets/images/portfolioManage.png";
import portfolioBookmark from "../../../assets/images/portfolioBookmark.png";
import portfolioInsure from "../../../assets/images/portfolioInsure.png";
import portfolioFylo from "../../../assets/images/portfolioFylo.png";

function Portfolio() {
  return (
    <Row>
      <Col className="portfolio-card">
        <PorfolioCard img={portfolioManage}>
          <h2>Manage</h2>
          <p>
            Esse projeto me fez criar uma landing page responsiva de acordo com
            o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas
            interativas, como o slider de testimoniais.
          </p>
          <Button variant="outline-primary-dark" as={Link} to="manage">
            check project
          </Button>
        </PorfolioCard>

        <PorfolioCard img={portfolioBookmark} flexDirection="row-reverse">
          <h2>Bookmark</h2>
          <p>
            Esse projeto me fez criar uma landing page responsiza de acordo com
            o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas
            interativas, como a área de Features.
          </p>
          <Button variant="outline-primary-dark" as={Link} to="bookmark">
            check project
          </Button>
        </PorfolioCard>

        <PorfolioCard img={portfolioInsure}>
          <h2>Insure</h2>
          <p>
            Este foi um projeto pequeno que consistiu em HTML e CSS
            principalmente. Eu construí uma landing page totalmente responsiva.
            O único JavaScript que usei foi para o menu de navegação mobile.
          </p>
          <Button variant="outline-primary-dark" as={Link} to="insure">
            check project
          </Button>
        </PorfolioCard>

        <PorfolioCard img={portfolioFylo} flexDirection="row-reverse">
          <h2>Fylo</h2>
          <p>
            Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e
            desktop para construir, então ele foi totalmente responsivo. Eu
            tomei um caminho mobile-first e usei CSS moderno como Flexbox e Grid
            para criar o layout.
          </p>
          <Button variant="outline-primary-dark" as={Link} to="fylo">
            check project
          </Button>
        </PorfolioCard>
      </Col>
    </Row>
  );
}

export default Portfolio;
