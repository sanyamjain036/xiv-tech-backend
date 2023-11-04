import express from "express";
import { getWeatherData } from "../controllers/weatherController.js";
const router = express.Router();

router.post("/getWeather", getWeatherData);

export default router;
