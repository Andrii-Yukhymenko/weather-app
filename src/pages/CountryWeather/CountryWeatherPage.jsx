import React from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import WeatherTabs from "../../components/WeatherTabs/WeatherTabs";
import { useSelector } from "react-redux";

function CountryWeatherPage() {
  const error = useSelector((state) => state.currentWeather.error);
  return (
    <>
      {error ? (
        <section className='error-message'>
          <div className="error-message__container container">
            <p className='error-message__text'>Введите правильное название страны</p>
          </div>
        </section>
        ) : (
        <>
          <CurrentWeather />
          <WeatherTabs />
        </>
      )}
    </>
  );
}

export default CountryWeatherPage;
