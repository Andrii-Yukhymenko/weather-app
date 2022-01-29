import axios from "axios";

const BASE_LINK = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '5bacda46919a4fec46ab34b6f484bc59';

export class services{
  static getCurrentWeather(place){
    return axios.get(`${BASE_LINK}weather?q=${place}&cnt=3&appid=${API_KEY}`);
  }
}
