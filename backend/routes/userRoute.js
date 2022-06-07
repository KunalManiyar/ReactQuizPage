const express = require("express");
const {
  enterName,
  submitAnswer,
  getUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/name").post(enterName);
router.route("/user/:name").get(getUser);
router.route("/submit/:name").put(submitAnswer);
module.exports = router;
