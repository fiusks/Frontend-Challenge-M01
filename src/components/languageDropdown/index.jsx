import "./style.scss";
import { Dropdown, Button } from "react-bootstrap";
import globeIcon from "../../assets/images/globe.svg";
import i18next from "i18next";
import cookies from "js-cookie";

function LanguageDropdown() {
  const languages = [
    {
      code: "pt",
      name: "Português",
      country_code: "br",
    },
    {
      code: "en",
      name: "English",
      country_code: "us",
    },
  ];
  const currentLanguageCode = cookies.get("i18next") || "pt";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src={globeIcon} alt="globe icon" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map(({ code, name, country_code }) => {
          return (
            <Dropdown.Item key={country_code}>
              <Button
                className="language-btn"
                onClick={() => i18next.changeLanguage(code)}
                disabled={code === currentLanguageCode}
              >
                <img
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country_code.toUpperCase()}.svg`}
                  alt="flag icon"
                  style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                />
                {name}
              </Button>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;
