import React, { useEffect, useState } from "react";
import headerLogo from "../../images/Headerlogo.svg";
import themeSwitcher from "../../images/ThemeSwitch.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const goToCountryPage = (e) => {
    e.preventDefault();
    navigate(`/${e.target[0].value}`);
    e.target[0].value = "";
  };

  let LSTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(LSTheme ? LSTheme : "light");

  const toggleTheme = () => {
    setTheme(LSTheme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  });

  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header-logo" to="/">
          <img src={headerLogo} alt="logo icon" className="header-logo__icon" />
          <h1 className="header-logo__title">REACT WEATHER</h1>
        </Link>
        <div className="header-controls">
          <img
            onClick={toggleTheme}
            src={themeSwitcher}
            alt="switch theme"
            className="header-controls__theme-switcher"
          />
          <form onSubmit={(e) => goToCountryPage(e)}>
            <input type="text" className="header-controls__search" />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
