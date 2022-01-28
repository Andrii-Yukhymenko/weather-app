import React from "react";
import "./style/main.scss";
import bgCloud from "./images/Background/BgCloud.png";
import themeSwitcher from "./images/ThemeSwitch.svg";
import headerLogo from "./images/Headerlogo.svg";
import weatherIconCloudly from './images/WetherIcons/IconCloudly.svg';
import weatherIconRain from './images/WetherIcons/IconRain.svg';
import weatherIconRainAndSun from './images/WetherIcons/IconRainAndSun.svg';
import weatherIconSmallRain from './images/WetherIcons/IconSmallRain.svg';
import weatherIconSun from './images/WetherIcons/IconSun.svg';
import infoHumidity from './images/InfoIcons/InfoHumidity.svg'
import infoPrecipitation from './images/InfoIcons/InfoPrecipitation.svg'
import infoThermometer from './images/InfoIcons/InfoThermometer.svg'
import infoWind from './images/InfoIcons/InfoWind.svg'
function App() {
  return (
    <>
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
      <main>
        <section className="current-weather">
          <div className="current-weather__container container">
            <div className="current-weather__main-info main-info">
              <div className="main-info__top-wrapper">
                <div className="main-info__temperature-wrapper">
                  <div className="main-info__temperature">15</div>
                  <div className="main-info__date">Сегодня</div>
                </div>
                <img
                  src={weatherIconSun}
                  alt="weather icon"
                  className="main-info__weather-icon"
                />
              </div>
              <div className="main-info__bottom-wrapper">
                <div className="main-info__time">Время: 16:00</div>
                <div className="main-info__location">Город: Лондон</div>
              </div>
            </div>
            <div className="current-weather__detailed-info detailed-info">
              <ul className="detailed-info__list">
                <li className="detailed-info__list-item">
                  <div className="detailed-info__item-icon">
                    <img src={infoThermometer} alt="icon"/>
                  </div>
                  <div className="detailed-info__item-title">Облачность</div>
                  <div className="detailed-info__item-text">Облачно</div>
                </li>
                <li className="detailed-info__list-item">
                  <div className="detailed-info__item-icon">
                    <img src={infoHumidity} alt="icon"/>
                  </div>
                  <div className="detailed-info__item-title">Облачность</div>
                  <div className="detailed-info__item-text">Облачно</div>
                </li>
                <li className="detailed-info__list-item">
                  <div className="detailed-info__item-icon">
                    <img src={infoPrecipitation} alt="icon"/>
                  </div>
                  <div className="detailed-info__item-title">Облачность</div>
                  <div className="detailed-info__item-text">Облачно</div>
                </li>
                <li className="detailed-info__list-item">
                  <div className="detailed-info__item-icon">
                    <img src={infoWind} alt="icon"/>
                  </div>
                  <div className="detailed-info__item-title">Облачность</div>
                  <div className="detailed-info__item-text">Облачно</div>
                </li>
              </ul>
              <img
                className="detailed-info__bg-image"
                src=""
                alt="weather background image"
              />
            </div>
          </div>
        </section>
        <section className="weather-tabs">
          <div className="weather-tabs__container container">
            <div className="weather-tabs__tabs-buttons-list tabs-buttons-list">
              <button className="tabs-buttons-list__button tabs-buttons-list__button--active">
                Сегодня
              </button>
              <button className="tabs-buttons-list__button">Сегодня</button>
              <button className="tabs-buttons-list__button">Сегодня</button>
            </div>
            <div className="weather-tabs__tab">
              <div className="weather-tabs__cards-list">
                <div className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img src={weatherIconCloudly} alt="icon" className="weather-mini-card__icon" />
                  <p className="weather-mini-card__day-temperature">+16</p>
                  <p className="weather-mini-card__night-temperature">
                    +10
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </div>
                <div className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <div className="weather-mini-card__date">12.01</div>
                  <img src={weatherIconRain} alt="icon" className="weather-mini-card__icon" />
                  <p className="weather-mini-card__day-temperature">+16</p>
                  <p className="weather-mini-card__night-temperature">
                    +10
                  </p>
                  <p className="weather-mini-card__precipitation">
                    Облачно
                  </p>
                </div>
                <div className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img src={weatherIconRainAndSun} alt="icon" className="weather-mini-card__icon" />
                  <p className="weather-mini-card__day-temperature">+16</p>
                  <p className="weather-mini-card__night-temperature">
                    +10
                  </p>
                  <p className="weather-mini-card__precipitation">
                    Облачно
                  </p>
                </div>
                <div className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img src={weatherIconRainAndSun} alt="icon" className="weather-mini-card__icon" />
                  <p className="weather-mini-card__day-temperature">+16</p>
                  <p className="weather-mini-card__night-temperature">
                    +10
                  </p>
                  <p className="weather-mini-card__precipitation">
                    Облачно
                  </p>
                </div>
                <div className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img src={weatherIconSmallRain} alt="icon" className="weather-mini-card__icon" />
                  <p className="weather-mini-card__day-temperature">+16</p>
                  <p className="weather-mini-card__night-temperature">
                    +10
                  </p>
                  <p className="weather-mini-card__precipitation">
                    Облачно
                  </p>
                </div>
                <div className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img src={weatherIconSmallRain} alt="icon" className="weather-mini-card__icon" />
                  <p className="weather-mini-card__day-temperature">+16</p>
                  <p className="weather-mini-card__night-temperature">
                    +10
                  </p>
                  <p className="weather-mini-card__precipitation">
                    Облачно
                  </p>
                </div>
                <div className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img src={weatherIconSmallRain} alt="icon" className="weather-mini-card__icon" />
                  <p className="weather-mini-card__day-temperature">+16</p>
                  <p className="weather-mini-card__night-temperature">
                    +10
                  </p>
                  <p className="weather-mini-card__precipitation">
                    Облачно
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
