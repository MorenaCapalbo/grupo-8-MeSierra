const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const indexController = {
  home: (req, res) => {
    return res.render("../views/home", {
      products, toThousand
    });
  },

  about: (req, res) => {
    return res.render("../views/about");
  },
  cart: (req, res) => {
    return res.render("../views/productCart");
  },
};

module.exports = indexController;
