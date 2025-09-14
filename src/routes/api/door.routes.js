const express = require("express");
const router = express.Router();
const doorController = require("../../controllers/door.controller");

router.post("/open", doorController.open);
router.post("/close", doorController.close);

module.exports = router;
