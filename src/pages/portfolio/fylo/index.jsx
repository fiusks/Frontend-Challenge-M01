import "./style.scss";
import { Button } from "react-bootstrap";
import fyloMain from "../../../assets/images/fyloMain.png";
import fyloPreview from "../../../assets/images/fyloPreview.png";
import portfolioFylo from "../../../assets/images/portfolioFylo.png";
import PortfolioDetailed from "../../../components/portfolioDetailed";
import PortfolioNavigation from "../../../components/portfolioNavigation";
import { useTranslation } from "react-i18next";

function Fylo() {
  const { t } = useTranslation();
  const projectResume = (
    <>
      <h2>PayCheck</h2>
      <p>{t("paycheck_text")}</p>
      <span>{t("paycheck_technologies")}</span>
      <br />
      <span>{t("paycheck_text")}</span>
      <Button variant="outline-primary-dark">visit</Button>
    </>
  );
  const projectDescription = <p>{t("paycheck_project_text")}</p>;
  return (
    <>
      <PortfolioDetailed
        mainImg={fyloMain}
        projectResume={projectResume}
        secondaryImg={portfolioFylo}
        auxiliarImg={fyloPreview}
        projectDescription={projectDescription}
      />
      <PortfolioNavigation />
    </>
  );
}

export default Fylo;
