import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  fetchDailyForecast,
  setPeriod,
} from "../../store/slices/dailyForecastSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DailyForecastCard from "../DailyForecastCard/DailyForecastCard";

function WeatherTabs() {
  const { place } = useParams();
  const dispatch = useDispatch();
  const forecastPeriod = useSelector((state) => state.dailyForecast.period);
  const loading = useSelector((state) => state.dailyForecast.loading);
  const dailyForecastData = useSelector(
    (state) => state.dailyForecast.dailyForecastData
  );
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
              console.log(e);
            }}
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
          <div className="weather-tabs__cards-list">
            {loading ? (
              <p style={{ color: "var(--text-color)" }}>Загрузка</p>
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
