import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import UserRouter from "./src/routers/UserRouter.js";
import { ConnectDb } from "./src/dbConfig/DbConfig.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//middleware

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//database

ConnectDb();
//router
app.use("/api/v1/user", UserRouter);

//uncaught error handler

app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "Page not found",
  };
  next(error);
});

//global error handler

app.use((error, req, res, next) => {
  const statusCode = error.errorCode || 500;

  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(
        `hey bro wassup! Your server running at http://localhost:${PORT}`
      );
});
