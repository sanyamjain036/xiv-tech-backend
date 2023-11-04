import axios from "axios";

const WEATHER_BASE_URL=`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=`

export const getWeatherData = async (cityName) => {
  const URL=WEATHER_BASE_URL+cityName+"&api=yes";
  const res= await axios.get(URL);
  return res.data
};
