import "./style.scss";
import { Button } from "react-bootstrap";
import cubosFlixMain from "../../../assets/images/cubosFlixMain.png";
import cubosFlixPreview1 from "../../../assets/images/cubosFlixStatic1.png";
import cubosFlixPreview2 from "../../../assets/images/cubosFlixStatic2.png";
import PorfolioDetailed from "../../../components/portfolioDetailed";
import PortolioNavigation from "../../../components/portfolioNavigation";
import { useTranslation, Trans } from "react-i18next";

function Manage() {
  const { t } = useTranslation();
  const projectResume = (
    <>
      <h2>Cubos Flix</h2>
      <Trans>
        <p>{t("cubos_flix_text")}</p>
      </Trans>
      <span>{t("cubos_flix_technologies")}</span>
      <br />
      <span>JS / HTML / CSS / React</span>
      <Button
        variant="outline-primary-dark"
        href="https://cubosflix-byfiusks.netlify.app/"
        target="_blank"
      >
        {t("generic_visit")}
      </Button>
    </>
  );
  const projectDescription = <p>{t("cubos_flix_project_text")}</p>;
  return (
    <>
      <PorfolioDetailed
        mainImg={cubosFlixMain}
        projectResume={projectResume}
        secondaryImg={cubosFlixPreview1}
        auxiliarImg={cubosFlixPreview2}
        projectDescription={projectDescription}
      />
      <PortolioNavigation />
    </>
  );
}

export default Manage;
