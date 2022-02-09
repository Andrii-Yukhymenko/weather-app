import React from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import WeatherTabs from "../../components/WeatherTabs/WeatherTabs";
import { useSelector } from "react-redux";

function CountryWeatherPage() {
  return (
    <>
      <CurrentWeather />
      <WeatherTabs />
    </>
  );
}

export default CountryWeatherPage;
