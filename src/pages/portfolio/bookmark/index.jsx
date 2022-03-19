import "./style.scss";
import { Button } from "react-bootstrap";
import portfolioHero from "../../../assets/images/portfolioHero.png";
import portfolioPreview1 from "../../../assets/images/portfolioPreview1.png";
import portfolioPreview2 from "../../../assets/images/portfolioPreview2.png";
import PorfolioDetailed from "../../../components/portfolioDetailed";
import PortolioNavigation from "../../../components/portfolioNavigation";
import { useTranslation, Trans } from "react-i18next";

function Bookmark() {
  const { t } = useTranslation();
  const projectResume = (
    <>
      <h2>{t("portfolio_portfolio_name")}</h2>
      <Trans>
        <p>{t("portfolio_text")}</p>
      </Trans>

      <span>{t("portfolio_technologies")}</span>
      <br />
      <span>HTML / CSS / JS</span>
      <Button
        variant="outline-primary-dark"
        href="https://github.com/fiusks/Frontend-Challenge-M01"
        target="_blank"
      >
        visit
      </Button>
    </>
  );
  const projectDescription = (
    <Trans>
      <p>{t("portfolio_project_text")}</p>
    </Trans>
  );
  return (
    <>
      <PorfolioDetailed
        mainImg={portfolioHero}
        projectResume={projectResume}
        secondaryImg={portfolioPreview1}
        auxiliarImg={portfolioPreview2}
        projectDescription={projectDescription}
      />
      <PortolioNavigation />
    </>
  );
}

export default Bookmark;
