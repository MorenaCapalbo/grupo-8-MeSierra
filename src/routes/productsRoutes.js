const express = require("express");
const router = express.Router();
const path = require("path");

const productsController = require ("../controllers/productsController")

router.get("/list", productsController.list)

router.get("/create", productsController.create)

router.get("/detail/:idDetail", productsController.detail)

router.get("/:id/edit", productsController.edit)

//Faltan rutas - /products (POST), /products/:id (PUT), /products/:id (DELETE), 

module.exports = router;
