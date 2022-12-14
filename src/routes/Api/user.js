const express = require("express");
const router = express.Router();
const ApiUserController = require("../../controllers/Api/ApiUserController");

router.get("/", ApiUserController.index);

module.exports = router;
