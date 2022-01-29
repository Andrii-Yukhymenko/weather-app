import React, { useEffect } from "react";
import "./style/main.scss";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Header from "./components/Header/Header";
import MainPage from "./pages/Main/MainPage";
import { Routes, Route } from "react-router-dom";
import CountryWeatherPage from "./pages/CountryWeather/CountryWeatherPage";
import { useDispatch } from "react-redux";
import { fetchCurrentWeather } from "./store/slices/currentWeatherSlice";
import {fetchDailyForecast} from "./store/slices/dailyForecast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentWeather());
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:country" element={<CountryWeatherPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <button onClick={() => dispatch(fetchCurrentWeather())}>Get data</button>
        <button onClick={() => dispatch(fetchDailyForecast())}>Daily forecast</button>
      </main>
    </>
  );
}

export default App;
