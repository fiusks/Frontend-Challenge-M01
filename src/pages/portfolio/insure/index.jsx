import "./style.scss";
import { Button } from "react-bootstrap";
import insureMain from "../../../assets/images/insureMain.png";
import insurePreview from "../../../assets/images/insurePreview.png";
import portfolioInsure from "../../../assets/images/portfolioInsure.png";
import PorfolioSubpage from "../../../components/portfolio-subpage";
import PortolioNavigation from "../../../components/portfolioNavigation";

function Insure() {
  const projectResume = (
    <>
      <h2>Insure</h2>
      <p>
        Esse projeto me fez criar uma landing page responsiza de acordo com o
        design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas
        interativas, como o slider de testimoniais.
      </p>
      <span>Interaction Design / Front End Development</span>
      <br />
      <span>HTML / CSS / JS</span>
      <Button variant="outline-primary-dark">visit</Button>
    </>
  );
  const projectDescription = (
    <p>
      Este projeto foi um desafio de front-end do Frontend Mentor. É uma
      plataforma que te faz práticar construindo websites a partir de um design
      e casos de usuário. Cada desafio contém designs mobile e desktop para
      ilustrar como o website seria em diferentes tamanhos de tela. Criar esses
      projetos me ajudou a refinar meu fluxo de trabalho e resolver problemas de
      código da vida real. Eu aprendi algo novo com cada projeto, me ajudando a
      melhorar e adaptar meu estilo.
    </p>
  );
  return (
    <>
      <PorfolioSubpage
        mainImg={insureMain}
        projectResume={projectResume}
        secondaryImg={portfolioInsure}
        auxiliarImg={insurePreview}
        projectDescription={projectDescription}
      />
      <PortolioNavigation />
    </>
  );
}

export default Insure;
