const Book = require("../models/books");

exports.bookCreate = (req, res) => {
  res.send("create controller");
};

exports.bookDetails = async (req, res) => {
  try {
    const { test } = req.query;

    return res.status(200).json({ test });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

exports.allBookDetails = (req, res) => {
  res.send("read all controller");
};

exports.bookUpdate = (req, res) => {
  res.status(204).send("update controller");
};

exports.bookDelete = (req, res) => {
  res.status(204).send("delete controller");
};
