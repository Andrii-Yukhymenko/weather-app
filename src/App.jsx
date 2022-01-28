import React from "react";
import "./style/main.scss";
import bg from "./images/Background/BgCloud.png";
function App() {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header-logo">
            <img src="" alt="logo icon" className="header-logo__icon" />
            <h1 className="header-logo__title">REACT WEATHER</h1>
          </div>
          <div className="header-controls">
            <img
              src=""
              alt="switch theme"
              className="header-controls__theme-switcher"
            />
            <input type="text" className="header-controls__search" />
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
                  src=""
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
                  <img src="" alt="icon" className="detailed-info__item-icon" />
                  <div className="detailed-info__item-title">Облачность</div>
                  <div className="detailed-info__item-text">Облачно</div>
                </li>
                <li className="detailed-info__list-item">
                  <img src="" alt="icon" className="detailed-info__item-icon" />
                  <div className="detailed-info__item-title">Облачность</div>
                  <div className="detailed-info__item-text">Облачно</div>
                </li>
                <li className="detailed-info__list-item">
                  <img src="" alt="icon" className="detailed-info__item-icon" />
                  <div className="detailed-info__item-title">Облачность</div>
                  <div className="detailed-info__item-text">Облачно</div>
                </li>
                <li className="detailed-info__list-item">
                  <img src="" alt="icon" className="detailed-info__item-icon" />
                  <div className="detailed-info__item-title">Облачность</div>
                  <div className="detailed-info__item-text">Облачно</div>
                </li>
              </ul>
              <img
                className="detailed-info__bg-image"
                src={bg}
                alt="weather background image"
              />
            </div>
          </div>
        </section>
        <section className="weather-tabs">
          <div className="weather-tabs__container container">
            <div className="weather-tabs__tabs-buttons-list tabs-buttons-list">
              <button className="tabs-buttons-list__button tabs-buttons-list__button--active">Сегодня</button>
              <button className="tabs-buttons-list__button">Сегодня</button>
              <button className="tabs-buttons-list__button">Сегодня</button>
            </div>
            <div className="weather-tabs__tab">
              <div className="weather-tabs__cards-list">
                <div className="weather-mini-card">
                  <div className="weather-mini-card__week-day">Субота</div>
                  <div className="weather-mini-card__date">12.01</div>
                  <img src="" alt="icon" className="weather-mini-card__date" />
                  <div className="weather-mini-card__day-temperature">+16</div>
                  <div className="weather-mini-card__night-temperature">
                    +10
                  </div>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </div>
                <div className="weather-mini-card">
                  <div className="weather-mini-card__week-day">Субота</div>
                  <div className="weather-mini-card__date">12.01</div>
                  <img src="" alt="icon" className="weather-mini-card__date" />
                  <div className="weather-mini-card__day-temperature">+16</div>
                  <div className="weather-mini-card__night-temperature">
                    +10
                  </div>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </div>
                <div className="weather-mini-card">
                  <div className="weather-mini-card__week-day">Субота</div>
                  <div className="weather-mini-card__date">12.01</div>
                  <img src="" alt="icon" className="weather-mini-card__date" />
                  <div className="weather-mini-card__day-temperature">+16</div>
                  <div className="weather-mini-card__night-temperature">
                    +10
                  </div>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </div>
                <div className="weather-mini-card">
                  <div className="weather-mini-card__week-day">Субота</div>
                  <div className="weather-mini-card__date">12.01</div>
                  <img src="" alt="icon" className="weather-mini-card__date" />
                  <div className="weather-mini-card__day-temperature">+16</div>
                  <div className="weather-mini-card__night-temperature">
                    +10
                  </div>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </div>
                <div className="weather-mini-card">
                  <div className="weather-mini-card__week-day">Субота</div>
                  <div className="weather-mini-card__date">12.01</div>
                  <img src="" alt="icon" className="weather-mini-card__date" />
                  <div className="weather-mini-card__day-temperature">+16</div>
                  <div className="weather-mini-card__night-temperature">
                    +10
                  </div>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </div>
                <div className="weather-mini-card">
                  <div className="weather-mini-card__week-day">Субота</div>
                  <div className="weather-mini-card__date">12.01</div>
                  <img src="" alt="icon" className="weather-mini-card__date" />
                  <div className="weather-mini-card__day-temperature">+16</div>
                  <div className="weather-mini-card__night-temperature">
                    +10
                  </div>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </div>
                <div className="weather-mini-card">
                  <div className="weather-mini-card__week-day">Субота</div>
                  <div className="weather-mini-card__date">12.01</div>
                  <img src="" alt="icon" className="weather-mini-card__date" />
                  <div className="weather-mini-card__day-temperature">+16</div>
                  <div className="weather-mini-card__night-temperature">
                    +10
                  </div>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
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
