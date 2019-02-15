const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookController");

router
  .route("/books")
  //   .all()
  .post(controller.bookCreate)
  .get(controller.allBookDetails);
router
  .route("/books/:id")
  //   .all()
  .get(controller.bookDetails)
  .patch(controller.bookUpdate)
  .delete(controller.bookDelete);

module.exports = router;
