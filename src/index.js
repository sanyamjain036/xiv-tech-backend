import "dotenv/config";
import "colors";
process.on("uncaughtException", (err) => {
  console.log(err.name.red.underline, err.message.red.underline);
  console.log("Uncaught Exception occured! Shutting down...".magenta);
  process.exit(1);
});
import cors from "cors";
import express from "express";
import CustomError from "./config/CustomError.js";
import globalErrorHandler from "./api/helpers/globalErrorHandler.js";
import { getWeatherData } from "./api/controllers/weatherController.js";


//creating express server
const app = express();

//connecting to db
// connectDB();

app.use(
  cors({
    origin: "*",
  })
); //every origin allowed

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.get("/sanyam", (req, res) => {
   res.send("Helloasdsa World!");
});


app.post("/getWeather",getWeatherData);


//middleware for swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//fallback route
app.all("*", (req, res, next) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server`,
    404
  );
  //pass it to global error handler
  next(err);
});

//global error handler
app.use(globalErrorHandler);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`.yellow.underline);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name.magenta, err.message.magenta);
  console.log("Unhandled rejection occured! Shutting down...".red);
  server.close(() => {
    process.exit(1);
  });
});
