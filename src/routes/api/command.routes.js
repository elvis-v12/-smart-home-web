const express = require("express");
const router = express.Router();
const commandController = require("../../controllers/command.controller");

router.post("/", commandController.command);

module.exports = router;
