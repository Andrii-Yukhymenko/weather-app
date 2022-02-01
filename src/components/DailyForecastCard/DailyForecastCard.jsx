import React from 'react';
import {findWeatherIcon} from "../../hooks/findWeatherIcon";
import {SwiperSlide} from "swiper/react";

export function DailyForecastCard({data}) {
  return (
    <SwiperSlide className="weather-mini-card">
      <p className="weather-mini-card__week-day">Субота</p>
      <p className="weather-mini-card__date">{data.datetime}</p>
      <img
        src={findWeatherIcon(data.weather.code)}
        alt="icon"
        className="weather-mini-card__icon"
      />
      <p className="weather-mini-card__day-temperature">
        {data.max_temp} &deg;
      </p>
      <p className="weather-mini-card__night-temperature">
        {data.min_temp} &deg;
      </p>
      <div className="weather-mini-card__precipitation">
        {data.weather.description}
      </div>
    </SwiperSlide>
  );
}

export default DailyForecastCard;
