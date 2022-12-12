//const { renderFile } = require("ejs");
//const express = require("express");
//const router = express.Router();

//router.get("/", (req, res) => {
//res.render("index");
//});
//router.get("/login", (req, res) => {
//res.render("login");
//});
//router.get("/register", (req, res) => {
//res.render("register");
//});

//module.exports = router;

const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.get("/cart", indexController.cart);
router.get("/about", indexController.about);

module.exports = router;
