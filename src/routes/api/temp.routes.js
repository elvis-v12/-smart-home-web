const express = require("express");
const router = express.Router();
const tempController = require("../../controllers/temp.controller");

router.get("/", tempController.getTemp);

module.exports = router;
