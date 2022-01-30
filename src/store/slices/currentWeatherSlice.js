import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {services} from "../../API/services";

const initialState = {
  loading: true,
  currentWeather: {},
};

export const fetchCurrentWeather = createAsyncThunk(
  'currentWeatherSlice/getCurrentWeather',
  (place) => {
    return services.getCurrentWeather(place).then((response) => response.data);
  }
)

const currentWeatherSlice = createSlice({
  name: "currentWeatherSlice",
  initialState,
  reducers: {
    getWeather: (state, action) => {
      console.log(state);
    },
  },
  extraReducers: {
    [fetchCurrentWeather.pending]: (state) => {},
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.currentWeather = action.payload;
      state.loading = false;
    },
    [fetchCurrentWeather.rejected]: (state) => {},
  }
});

export default currentWeatherSlice.reducer;
export const { getWeather } = currentWeatherSlice.actions;
