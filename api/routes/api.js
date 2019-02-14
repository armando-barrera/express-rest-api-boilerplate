const express = require("express");
const router = express.Router();
const controller = require("../controllers/apiController");

router
  .route("/books")
  //   .all()
  .post(controller.createController)
  .get(controller.readAllController);
router
  .route("/books/:id")
  //   .all()
  .get(controller.readController)
  .patch(controller.updateController)
  .delete(controller.deleteController);

module.exports = router;
