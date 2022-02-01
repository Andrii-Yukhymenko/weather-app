import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import weatherIconCloudly from "../../images/WetherIcons/IconCloudly.svg";
import {
  fetchDailyForecast,
  setPeriod,
} from "../../store/slices/dailyForecastSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function WeatherTabs() {
  const { place } = useParams();
  const dispatch = useDispatch();
  const forecastPeriod = useSelector((state) => state.dailyForecast.period);
  const loading = useSelector((state) => state.dailyForecast.loading);
  useEffect(
    () => dispatch(fetchDailyForecast([place, forecastPeriod])),
    [forecastPeriod]
  );
  return (
    <section className="weather-tabs">
      <div className="weather-tabs__container container">
        <div className="weather-tabs__tabs-buttons-list tabs-buttons-list">
          <button
            onClick={() => dispatch(setPeriod(7))}
            className="tabs-buttons-list__button tabs-buttons-list__button--active"
          >
            На неделю
          </button>
          <button
            onClick={() => dispatch(setPeriod(14))}
            className="tabs-buttons-list__button"
          >
            На 14 дней
          </button>
        </div>
        <div className="weather-tabs__tab">
          {loading ? (
            <p style={{ color: "var(--text-color)" }}>Загрузка</p>
          ) : (
            <div className="weather-tabs__cards-list">
              <Swiper
                spaceBetween={20}
                slidesPerView={7}
                modules={[Navigation]}
                navigation
              >
                <SwiperSlide className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img
                    src={weatherIconCloudly}
                    alt="icon"
                    className="weather-mini-card__icon"
                  />
                  <p className="weather-mini-card__day-temperature">
                    +16 &deg;
                  </p>
                  <p className="weather-mini-card__night-temperature">
                    +10 &deg;
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </SwiperSlide>
                <SwiperSlide className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img
                    src={weatherIconCloudly}
                    alt="icon"
                    className="weather-mini-card__icon"
                  />
                  <p className="weather-mini-card__day-temperature">
                    +16 &deg;
                  </p>
                  <p className="weather-mini-card__night-temperature">
                    +10 &deg;
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </SwiperSlide>
                <SwiperSlide className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img
                    src={weatherIconCloudly}
                    alt="icon"
                    className="weather-mini-card__icon"
                  />
                  <p className="weather-mini-card__day-temperature">
                    +16 &deg;
                  </p>
                  <p className="weather-mini-card__night-temperature">
                    +10 &deg;
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </SwiperSlide>
                <SwiperSlide className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img
                    src={weatherIconCloudly}
                    // src={weatherIconCloudly}
                    alt="icon"
                    className="weather-mini-card__icon"
                  />
                  <p className="weather-mini-card__day-temperature">
                    +16 &deg;
                  </p>
                  <p className="weather-mini-card__night-temperature">
                    +10 &deg;
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </SwiperSlide>
                <SwiperSlide className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img
                    src={weatherIconCloudly}
                    alt="icon"
                    className="weather-mini-card__icon"
                  />
                  <p className="weather-mini-card__day-temperature">
                    +16 &deg;
                  </p>
                  <p className="weather-mini-card__night-temperature">
                    +10 &deg;
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </SwiperSlide>
                <SwiperSlide className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img
                    src={weatherIconCloudly}
                    alt="icon"
                    className="weather-mini-card__icon"
                  />
                  <p className="weather-mini-card__day-temperature">
                    +16 &deg;
                  </p>
                  <p className="weather-mini-card__night-temperature">
                    +10 &deg;
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </SwiperSlide>
                <SwiperSlide className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img
                    src={weatherIconCloudly}
                    alt="icon"
                    className="weather-mini-card__icon"
                  />
                  <p className="weather-mini-card__day-temperature">
                    +16 &deg;
                  </p>
                  <p className="weather-mini-card__night-temperature">
                    +10 &deg;
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </SwiperSlide>
                <SwiperSlide className="weather-mini-card">
                  <p className="weather-mini-card__week-day">Субота</p>
                  <p className="weather-mini-card__date">12.01</p>
                  <img
                    src={weatherIconCloudly}
                    alt="icon"
                    className="weather-mini-card__icon"
                  />
                  <p className="weather-mini-card__day-temperature">
                    +16 &deg;
                  </p>
                  <p className="weather-mini-card__night-temperature">
                    +10 &deg;
                  </p>
                  <div className="weather-mini-card__precipitation">
                    Облачно
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default WeatherTabs;
