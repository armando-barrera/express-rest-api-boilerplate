const express = require("express");
const logger = require("morgan");

const app = express();

// Check if the server is running on production or on local environment to send express header
const dev = app.get("env") !== "production";
if (!dev) {
  app.disable("x-powered-by");
  app.use(logger("common"));
  //  app.use(compression());
} else {
  app.use(logger("dev"));
}

app.get("/", (req, res) => res.send("hello world"));

app.listen(process.env.PORT || 3000, () => {
  console.log("REST API running on port 3000");
});
