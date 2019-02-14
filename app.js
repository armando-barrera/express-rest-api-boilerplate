const express = require("express");
const logger = require("morgan");
const api = require("./api/routes/api");
const { port } = require("./config");

const app = express();
const environment = process.env.NODE_ENV;

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

app.listen(port, () => {
  // if (
  //   environment !== "production" &&
  //   environment !== "development" &&
  //   environment !== "testing"
  // ) {
  //   console.log("NODE_ENV must be production or development");
  //   process.exit(1);
  // }
  console.log(`REST API running on port ${port}`);
});
