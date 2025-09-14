const express = require("express");
const router = express.Router();
const lightsController = require("../../controllers/lights.controller");

router.post("/on", lightsController.turnOn);
router.post("/off", lightsController.turnOff);

module.exports = router;
