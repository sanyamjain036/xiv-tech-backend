import * as WeatherService from "../services/weatherService.js";
import asyncErrorHandler from "../helpers/asyncErrorHandler.js";

export const getWeatherData = asyncErrorHandler(async (req, res) => {
  const { locations } = req.body;
  const allData = await Promise.all(
    locations.map((location) => WeatherService.getWeatherData(location))
  );
  res.status(200).json({
    status: "success",
    message: "Weather Data fetched successfully",
    data: allData,
  });
});
