import React from 'react';
import headerLogo from "../../images/Headerlogo.svg";
import themeSwitcher from "../../images/ThemeSwitch.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <a href="#" className="header-logo">
          <img
            src={headerLogo}
            alt="logo icon"
            className="header-logo__icon"
          />
          <h1 className="header-logo__title">REACT WEATHER</h1>
        </a>
        <div className="header-controls">
          <img
            src={themeSwitcher}
            alt="switch theme"
            className="header-controls__theme-switcher"
          />
          <form>
            <input type="text" className="header-controls__search" />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
