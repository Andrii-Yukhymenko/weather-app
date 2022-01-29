import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSlice from "./slices/currentWeatherSlice";
import dailyForecast from "./slices/dailyForecast";
const rootReducer = combineReducers({
  currentWeather: currentWeatherSlice,
  dailyForecast: dailyForecast,
});

export const store = configureStore({
  reducer: rootReducer,
});
