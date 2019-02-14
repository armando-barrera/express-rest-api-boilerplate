const express = require("express");
const logger = require("morgan");
const api = require("./api/routes/api");

const app = express();

// Check if the server is running on production or on local environment to send express header
const dev = app.get("env") !== "production";
if (!dev) {
  app.disable("x-powered-by");
  app.use(logger("common"));
} else {
  app.use(logger("dev"));
}

app.use("/api/v1", api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`REST API running on port ${port}`);
});
