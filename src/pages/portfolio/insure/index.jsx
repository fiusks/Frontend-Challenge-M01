import "./style.scss";
import { Button } from "react-bootstrap";
import insureMain from "../../../assets/images/insureMain.png";
import insurePreview from "../../../assets/images/insurePreview.png";
import portfolioInsure from "../../../assets/images/portfolioInsure.png";
import PortfolioDetailed from "../../../components/portfolioDetailed";
import PortfolioNavigation from "../../../components/portfolioNavigation";
import { useTranslation } from "react-i18next";
function Insure() {
  const { t } = useTranslation();
  const projectResume = (
    <>
      <h2>DinDin</h2>
      <p>{t("dindin_text")}</p>
      <span>{t("dindin_technologies")}</span>
      <br />
      <span>{t("dindin_text")}</span>
      <Button variant="outline-primary-dark">visit</Button>
    </>
  );
  const projectDescription = <p>{t("dindin_project_text")}</p>;
  return (
    <>
      <PortfolioDetailed
        mainImg={insureMain}
        projectResume={projectResume}
        secondaryImg={portfolioInsure}
        auxiliarImg={insurePreview}
        projectDescription={projectDescription}
      />
      <PortfolioNavigation />
    </>
  );
}

export default Insure;
