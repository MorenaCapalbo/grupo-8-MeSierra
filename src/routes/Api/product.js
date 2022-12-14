const express = require("express");
const router = express.Router();
const ApiProductsController = require("../../controllers/Api/ApiProductsController");

router.get("/", ApiProductsController.index);
router.get("/:id", ApiProductsController.detalleProducto);


module.exports = router;
