const fs = require("fs");
const path = require("path");
const db = require("../database/models");

// const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const indexController = {
  home: (req, res) => {
    db.Producto.findAll({
      include: [
        { association: "Marcas" },
        { association: "Categorias" },
        { association: "Imagenes" },
      ],
    }).then(function (products) {
      return res.render("home", {
        products, toThousand
      });
    });
    
  },
  index: (req, res) => {
    db.Producto.findAll({
      include: [
        { association: "Marcas" },
        { association: "Categorias" },
        { association: "Imagenes" },
      ],
    }).then(function (respuesta) {
      console.log(req.session)
      return res.render("products", {
        respuesta,
        toThousand,
      });
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
