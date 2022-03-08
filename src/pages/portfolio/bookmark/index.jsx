import "./style.scss";
import { Button } from "react-bootstrap";
import bookmarkMain from "../../../assets/images/bookmarkMain.png";
import bookmarkPreview from "../../../assets/images/bookmarkPreview.png";
import portfolioBookmark from "../../../assets/images/portfolioBookmark.png";
import PorfolioSubpage from "../../../components/portfolio-subpage";
import PortolioNavigation from "../../../components/portfolioNavigation";

function Bookmark() {
  const projectResume = (
    <>
      <h2>Bookmark</h2>
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
        mainImg={bookmarkMain}
        projectResume={projectResume}
        secondaryImg={portfolioBookmark}
        auxiliarImg={bookmarkPreview}
        projectDescription={projectDescription}
      />
      <PortolioNavigation />
    </>
  );
}

export default Bookmark;
