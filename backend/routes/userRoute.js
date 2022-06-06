const express = require("express");
const { enterName, submitAnswer } = require("../controllers/userController");
const router = express.Router();

router.route("/name").post(enterName);
router.route("/submit/:name").put(submitAnswer);
module.exports = router;
