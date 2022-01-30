import React, { useEffect } from "react";
import weatherIconSun from "../../images/WetherIcons/IconSun.svg";
import infoThermometer from "../../images/InfoIcons/InfoThermometer.svg";
import infoHumidity from "../../images/InfoIcons/InfoHumidity.svg";
import infoPrecipitation from "../../images/InfoIcons/InfoPrecipitation.svg";
import infoWind from "../../images/InfoIcons/InfoWind.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../store/slices/currentWeatherSlice";

function CurrentWeather() {
  const { place } = useParams();
  console.log(place);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentWeather(place));
  }, []);
  const currentWeatherData = useSelector(
    (state) => state.currentWeather.currentWeather
  );
  const loading = useSelector((state) => state.currentWeather.loading);
  return (
    <section className="current-weather">
      {loading ? (
        <p style={{ color: "var(--text-color)" }}>Загрузка</p>
      ) : (
        <div className="current-weather__container container">
          <div className="current-weather__main-info main-info">
            <div className="main-info__top-wrapper">
              <div className="main-info__temperature-wrapper">
                <div className="main-info__temperature">
                  {Math.round(currentWeatherData.main.temp)}&deg;
                </div>
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
              <div className="main-info__location">
                Город: {currentWeatherData.name}
              </div>
            </div>
          </div>
          <div className="current-weather__detailed-info detailed-info">
            <ul className="detailed-info__list">
              <li className="detailed-info__list-item">
                <div className="detailed-info__item-icon">
                  <img src={infoThermometer} alt="icon" />
                </div>
                <div className="detailed-info__item-title">Температура</div>
                <div className="detailed-info__item-text">{Math.round(currentWeatherData.main.temp)}&deg; - ощущается как {Math.round(currentWeatherData.main.feels_like)}&deg;</div>
              </li>
              <li className="detailed-info__list-item">
                <div className="detailed-info__item-icon">
                  <img src={infoHumidity} alt="icon" />
                </div>
                <div className="detailed-info__item-title">Давление</div>
                <div className="detailed-info__item-text">{Math.round(currentWeatherData.main.pressure / 1.33)} мм ртутного столба - нормально</div>
              </li>
              <li className="detailed-info__list-item">
                <div className="detailed-info__item-icon">
                  <img src={infoPrecipitation} alt="icon" />
                </div>
                <div className="detailed-info__item-title">Осадки</div>
                <div className="detailed-info__item-text">{currentWeatherData.weather[0].description}</div>
              </li>
              <li className="detailed-info__list-item">
                <div className="detailed-info__item-icon">
                  <img src={infoWind} alt="icon" />
                </div>
                <div className="detailed-info__item-title">Ветер</div>
                <div className="detailed-info__item-text">{currentWeatherData.wind.speed} м/с юго-запад - легкий ветер</div>
              </li>
            </ul>
            <img
              className="detailed-info__bg-image"
              src=""
              alt="weather background image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default CurrentWeather;
