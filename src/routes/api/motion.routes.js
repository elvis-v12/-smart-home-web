const express = require("express");
const router = express.Router();
const motionController = require("../../controllers/motion.controller");

router.get("/", motionController.getMotion);

module.exports = router;
