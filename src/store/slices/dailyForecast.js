import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { services } from "../../API/services";

const initialState = {};

export const fetchDailyForecast = createAsyncThunk(
  "dailyForecast/fetchDailyForecast",
  () => {
    return services
      .getCurrentWeather("Kharkiv")
      .then((responce) => responce.data);
  }
);

const dailyForecast = createSlice({
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

export default dailyForecast.reducer;
export const { getData } = dailyForecast.actions;
