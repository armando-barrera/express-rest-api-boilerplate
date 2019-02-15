const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const api = require("./api/routes/api");
const { APP_NAME, ENV, PORT } = require("./config/config");

const app = express();

app.use(helmet());
// Check if the server is running on production or on local environment to send express header
const dev = app.get("env") !== "production";
if (!dev) {
  app.disable("x-powered-by");
  app.use(logger("common"));
} else {
  app.use(logger("dev"));
}

app.use("/api/v1", api);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
// Error handler
app.use((error, req, res, next) => {
  // res.locals.message = error.message;
  // res.locals.error = req.app.get("env") === "development" ? error : {};
  res.status(error.status || 500);
  res.json({ error: error.message });
});

module.exports = app;
