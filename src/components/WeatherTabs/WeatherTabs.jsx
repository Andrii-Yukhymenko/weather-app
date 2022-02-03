import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  fetchDailyForecast,
  setPeriod,
} from "../../store/slices/dailyForecastSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DailyForecastCard from "../DailyForecastCard/DailyForecastCard";
import Loader from "../Loader/Loader";

function WeatherTabs() {
  const { place } = useParams();
  const dispatch = useDispatch();
  const forecastPeriod = useSelector((state) => state.dailyForecast.period);
  const loading = useSelector((state) => state.dailyForecast.loading);
  const dailyForecastData = useSelector((state) => state.dailyForecast.data);
  useEffect(
    () => dispatch(fetchDailyForecast([place, forecastPeriod])),
    [forecastPeriod]
  );
  return (
    <section className="weather-tabs">
      <div className="weather-tabs__container container">
        <div className="weather-tabs__tabs-buttons-list tabs-buttons-list">
          <button
            onClick={(e) => {
              dispatch(setPeriod(7));
            }}
            className={`tabs-buttons-list__button ${
              forecastPeriod === 7 && "tabs-buttons-list__button--active"
            }`}
          >
            На неделю
          </button>
          <button
            onClick={() => {
              dispatch(setPeriod(14));
            }}
            className={`tabs-buttons-list__button ${
              forecastPeriod === 14 && "tabs-buttons-list__button--active"
            }`}
          >
            На 14 дней
          </button>
        </div>
        <div className="weather-tabs__tab">
          <div className="weather-tabs__cards-list">
            {loading ? (
              <Loader />
            ) : (
              <Swiper
                spaceBetween={20}
                slidesPerView={7}
                modules={[Navigation]}
                navigation
              >
                {dailyForecastData.data.map((i) => {
                  return (
                    <SwiperSlide key={i.datetime}>
                      <DailyForecastCard data={i} />;
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherTabs;
