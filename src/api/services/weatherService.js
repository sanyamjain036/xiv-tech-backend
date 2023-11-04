

const WEATHER_BASE_URL=`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=`

export const getWeatherData = async (cityName) => {
  const URL=WEATHER_BASE_URL+cityName+"&api=yes";
  const res= await fetch(URL);
  const data= await res.json();
  return data
};
