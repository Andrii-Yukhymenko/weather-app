import React from 'react';
import weatherIconSun from "../../images/WetherIcons/IconSun.svg";
import infoThermometer from "../../images/InfoIcons/InfoThermometer.svg";
import infoHumidity from "../../images/InfoIcons/InfoHumidity.svg";
import infoPrecipitation from "../../images/InfoIcons/InfoPrecipitation.svg";
import infoWind from "../../images/InfoIcons/InfoWind.svg";

function CurrentWeather() {
  return (
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
                <img src={infoThermometer} alt="icon" />
              </div>
              <div className="detailed-info__item-title">Облачность</div>
              <div className="detailed-info__item-text">Облачно</div>
            </li>
            <li className="detailed-info__list-item">
              <div className="detailed-info__item-icon">
                <img src={infoHumidity} alt="icon" />
              </div>
              <div className="detailed-info__item-title">Облачность</div>
              <div className="detailed-info__item-text">Облачно</div>
            </li>
            <li className="detailed-info__list-item">
              <div className="detailed-info__item-icon">
                <img src={infoPrecipitation} alt="icon" />
              </div>
              <div className="detailed-info__item-title">Облачность</div>
              <div className="detailed-info__item-text">Облачно</div>
            </li>
            <li className="detailed-info__list-item">
              <div className="detailed-info__item-icon">
                <img src={infoWind} alt="icon" />
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
  );
}

export default CurrentWeather;
