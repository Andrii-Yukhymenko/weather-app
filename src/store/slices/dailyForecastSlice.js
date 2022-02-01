import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherBitAPI } from "../../API/weatherBitAPI";

const initialState = {
  loading: true,
  period: 7,
  dailyForecastData: {},
};

export const fetchDailyForecast = createAsyncThunk(
  "dailyForecastSlice/fetchDailyForecast",
  ([place, period]) => {
    console.log(place, period);
    return weatherBitAPI
      .getDailyForecast(place, period)
      .then((responce) => responce.data);
  }
);

const dailyForecastSlice = createSlice({
  name: "dailyForecast",
  initialState,
  reducers: {
    setPeriod: (state, action) => {
      state.period = action.payload;
      console.log("Период изменен");
    },
  },
  extraReducers: {
    [fetchDailyForecast.pending]: (state) => {
      state.loading = true;
    },
    [fetchDailyForecast.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.dailyForecastData = action.payload;
    },
    [fetchDailyForecast.rejected]: (state) => {},
  },
});

export default dailyForecastSlice.reducer;
export const { setPeriod } = dailyForecastSlice.actions;
