const { renderFile } = require("ejs");
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");


const rutaProductosJson = path.join(__dirname, '../database/products.json');
let products = JSON.parse(fs.readFileSync(rutaProductosJson, 'utf-8'));

router.get("/", (req, res) => {
  res.render('productList', products);
});
router.get("/cart", (req, res) => {
  res.render("productCart");
});
router.get("/detail", (req, res) => {
  res.render("productDetail");
});

// Enrutador

router.get("/products", productsController.list);


module.exports = router;
