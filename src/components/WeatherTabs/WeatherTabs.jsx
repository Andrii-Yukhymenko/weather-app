import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import weatherIconCloudly from "../../images/WetherIcons/IconCloudly.svg";
import weatherIconRain from "../../images/WetherIcons/IconRain.svg";
import weatherIconRainAndSun from "../../images/WetherIcons/IconRainAndSun.svg";
import weatherIconSmallRain from "../../images/WetherIcons/IconSmallRain.svg";
import weatherIconSun from "../../images/WetherIcons/IconSun.svg";

function WeatherTabs() {

  return (
    <section className="weather-tabs">
      <div className="weather-tabs__container container">
        <div className="weather-tabs__tabs-buttons-list tabs-buttons-list">
          <button className="tabs-buttons-list__button tabs-buttons-list__button--active">
            На неделю
          </button>
          <button className="tabs-buttons-list__button">На 10 дней</button>
          <button className="tabs-buttons-list__button">На месяц</button>
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
                <p className="weather-mini-card__day-temperature">+16 &deg;</p>
                <p className="weather-mini-card__night-temperature">
                  +10 &deg;
                </p>
                <div className="weather-mini-card__precipitation">Облачно</div>
              </SwiperSlide>
              <SwiperSlide className="weather-mini-card">
                <p className="weather-mini-card__week-day">Субота</p>
                <p className="weather-mini-card__date">12.01</p>
                <img
                  src={weatherIconCloudly}
                  alt="icon"
                  className="weather-mini-card__icon"
                />
                <p className="weather-mini-card__day-temperature">+16 &deg;</p>
                <p className="weather-mini-card__night-temperature">
                  +10 &deg;
                </p>
                <div className="weather-mini-card__precipitation">Облачно</div>
              </SwiperSlide>
              <SwiperSlide className="weather-mini-card">
                <p className="weather-mini-card__week-day">Субота</p>
                <p className="weather-mini-card__date">12.01</p>
                <img
                  src={weatherIconCloudly}
                  alt="icon"
                  className="weather-mini-card__icon"
                />
                <p className="weather-mini-card__day-temperature">+16 &deg;</p>
                <p className="weather-mini-card__night-temperature">
                  +10 &deg;
                </p>
                <div className="weather-mini-card__precipitation">Облачно</div>
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
                <p className="weather-mini-card__day-temperature">+16 &deg;</p>
                <p className="weather-mini-card__night-temperature">
                  +10 &deg;
                </p>
                <div className="weather-mini-card__precipitation">Облачно</div>
              </SwiperSlide>
              <SwiperSlide className="weather-mini-card">
                <p className="weather-mini-card__week-day">Субота</p>
                <p className="weather-mini-card__date">12.01</p>
                <img
                  src={weatherIconCloudly}
                  alt="icon"
                  className="weather-mini-card__icon"
                />
                <p className="weather-mini-card__day-temperature">+16 &deg;</p>
                <p className="weather-mini-card__night-temperature">
                  +10 &deg;
                </p>
                <div className="weather-mini-card__precipitation">Облачно</div>
              </SwiperSlide>
              <SwiperSlide className="weather-mini-card">
                <p className="weather-mini-card__week-day">Субота</p>
                <p className="weather-mini-card__date">12.01</p>
                <img
                  src={weatherIconCloudly}
                  alt="icon"
                  className="weather-mini-card__icon"
                />
                <p className="weather-mini-card__day-temperature">+16 &deg;</p>
                <p className="weather-mini-card__night-temperature">
                  +10 &deg;
                </p>
                <div className="weather-mini-card__precipitation">Облачно</div>
              </SwiperSlide>
              <SwiperSlide className="weather-mini-card">
                <p className="weather-mini-card__week-day">Субота</p>
                <p className="weather-mini-card__date">12.01</p>
                <img
                  src={weatherIconCloudly}
                  alt="icon"
                  className="weather-mini-card__icon"
                />
                <p className="weather-mini-card__day-temperature">+16 &deg;</p>
                <p className="weather-mini-card__night-temperature">
                  +10 &deg;
                </p>
                <div className="weather-mini-card__precipitation">Облачно</div>
              </SwiperSlide>
              <SwiperSlide className="weather-mini-card">
                <p className="weather-mini-card__week-day">Субота</p>
                <p className="weather-mini-card__date">12.01</p>
                <img
                  src={weatherIconCloudly}
                  alt="icon"
                  className="weather-mini-card__icon"
                />
                <p className="weather-mini-card__day-temperature">+16 &deg;</p>
                <p className="weather-mini-card__night-temperature">
                  +10 &deg;
                </p>
                <div className="weather-mini-card__precipitation">Облачно</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherTabs;
