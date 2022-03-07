import "./style.scss";
import { Outlet, useLocation } from "react-router-dom";
import PorfolioCard from "../../components/portfolio-card";
import manageImage from "../../assets/images/manage.png";

function Portfolio() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/portfolio" ? (
        <>
          <PorfolioCard img={manageImage}>
            <h2>Manage</h2>
            <p>
              Esse projeto me fez criar uma landing page responsiva de acordo
              com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as
              áreas interativas, como o slider de testimoniais.
            </p>
          </PorfolioCard>

          <PorfolioCard img={manageImage} flexDirection="row-reverse">
            <h2>Manage</h2>
            <p>
              Esse projeto me fez criar uma landing page responsiva de acordo
              com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as
              áreas interativas, como o slider de testimoniais.
            </p>
          </PorfolioCard>

          <PorfolioCard img={manageImage}>
            <h2>Manage</h2>
            <p>
              Esse projeto me fez criar uma landing page responsiva de acordo
              com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as
              áreas interativas, como o slider de testimoniais.
            </p>
          </PorfolioCard>

          <PorfolioCard img={manageImage} flexDirection="row-reverse">
            <h2>Manage</h2>
            <p>
              Esse projeto me fez criar uma landing page responsiva de acordo
              com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as
              áreas interativas, como o slider de testimoniais.
            </p>
          </PorfolioCard>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Portfolio;
