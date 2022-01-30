import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { services } from "../../API/services";

const initialState = {};

export const fetchDailyForecast = createAsyncThunk(
  "dailyForecastSlice/fetchDailyForecast",
  (place) => {
    return services
      .getCurrentWeather(place)
      .then((responce) => responce.data);
  }
);

const dailyForecastSlice = createSlice({
  name: "dailyForecast",
  initialState,
  reducers: {
    getData: () => {},
  },
  extraReducers: {
    [fetchDailyForecast.pending]: (state) => {},
    [fetchDailyForecast.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [fetchDailyForecast.rejected]: (state) => {},
  },
});

export default dailyForecastSlice.reducer;
export const { getData } = dailyForecastSlice.actions;
