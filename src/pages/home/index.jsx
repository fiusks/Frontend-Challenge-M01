import "./style.scss";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PorfolioCard from "../../components/portfolio-card";
import profilepicture from "../../assets/images/Me.jpg";
import homeImage from "../../assets/images/homeimage.png";
function Home() {
  return (
    <Row>
      <Col className="p-5">
        <Row className=" mb-5">
          <Col className="home-first-section ">
            <img src={homeImage} alt="monitor with open app inside" />
            <div className="section-text">
              <h1>
                Olá, me chamo Rafael Barros e eu amo construir websites lindos
              </h1>
              <Button>sobre mim</Button>
            </div>
          </Col>
        </Row>
        <PorfolioCard img={profilepicture} btnText="go to my porfolio">
          <h1>Sobre Mim</h1>
          <p>
            Sou um desenvolvedor front-end júnior procurando por uma
            oportunidade. Eu foco em escrever HTML acessível, usando práticas
            modernas de CSS e escrevendo um JavaScript limpo. Quando estou
            escrevendo código JavaScript, na maioria das vezes estou usando
            React, mas posso me adapta para qualquer ferramenta se necessário.
            Moro em Londres, UK, mas também seria feliz trabalhando remotamente
            e tenho experiência em times remotos. Quando não estou codando,
            poderá me achar fora de casa. Eu adoro estar próximo a natureza seja
            para uma caminhada, corrida ou ciclismo. Eu amaria se você desse uma
            olhada no meu trabalho.
          </p>
          <Button
            as={Link}
            to="/portfolio"
            variant="outline-primary-dark"
            className="home-card-btn"
          >
            go to my portfolio
          </Button>
        </PorfolioCard>
      </Col>
    </Row>
  );
}

export default Home;
