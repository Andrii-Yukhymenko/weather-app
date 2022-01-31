import weatherIconSun from "../images/WetherIcons/IconSun.svg";
import weatherIconCloudly from "../images/WetherIcons/IconCloudly.svg";
import weatherIconRainAndSun from "../images/WetherIcons/IconRainAndSun.svg";
import weatherIconSmallRain from "../images/WetherIcons/IconSmallRain.svg";
import weatherIconRain from "../images/WetherIcons/IconRain.svg";

export const findWeatherIcon = (description) => {
  console.log(description);
  if (description >= 200 && description <= 232) {
    return weatherIconRain;
  }
  if (description >= 300 && description <= 321) {
    return weatherIconSmallRain;
  }
  if (description >= 500 && description <= 504) {
    return weatherIconRainAndSun;
  }
  if (description >= 504 && description <= 531) {
    return weatherIconRain;
  }
  if (description >= 600 && description <= 622) {
    return weatherIconRain;
  }
  if (description >= 701 && description <= 781) {
    return weatherIconCloudly;
  }
  if (description === 800) {
    return weatherIconSun;
  }
  if (description >= 801 && description <= 804) {
    return weatherIconCloudly;
  }
};
