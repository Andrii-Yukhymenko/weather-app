import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import weatherIconCloudly from "../../images/WetherIcons/IconCloudly.svg";

function WeatherTabs() {
  return (
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
                <p className="weather-mini-card__day-temperature">+16</p>
                <p className="weather-mini-card__night-temperature">+10</p>
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
                <p className="weather-mini-card__day-temperature">+16</p>
                <p className="weather-mini-card__night-temperature">+10</p>
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
                <p className="weather-mini-card__day-temperature">+16</p>
                <p className="weather-mini-card__night-temperature">+10</p>
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
                <p className="weather-mini-card__day-temperature">+16</p>
                <p className="weather-mini-card__night-temperature">+10</p>
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
                <p className="weather-mini-card__day-temperature">+16</p>
                <p className="weather-mini-card__night-temperature">+10</p>
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
                <p className="weather-mini-card__day-temperature">+16</p>
                <p className="weather-mini-card__night-temperature">+10</p>
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
                <p className="weather-mini-card__day-temperature">+16</p>
                <p className="weather-mini-card__night-temperature">+10</p>
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
                <p className="weather-mini-card__day-temperature">+16</p>
                <p className="weather-mini-card__night-temperature">+10</p>
                <div className="weather-mini-card__precipitation">
                  Облачно
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherTabs;
