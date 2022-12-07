const { resolveInclude } = require("ejs");
const fs = require("fs");
const path = require("path");
const { formatWithOptions } = require("util");
const db = require("../database/models/Index");
const sequelize = db.sequelize;

// Codigo para que pueda leer los productos del json

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//Codigo que te transforma las comas (formato americano) en puntos (formato latam)

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ".");

const productsController = {
  index: (req, res) => {
    db.Producto.findAll({
      include: [{ association: "Marcas" }, { association: "Categorias" }],
    }).then(function (respuesta) {
      return res.render("products", {
        respuesta,
        toThousand,
      });
    });
  },

  detail: (req, res) => {
    const idProduct = req.params.id;
    res.send("Detalle del producto " + idProduct);
  },

  create: (req, res) => {
    db.Marca.findAll()
    .then((marcas)=> {
      res.render("../views/productCreate", {
        marcas
      })
    })
  },

  store: (req, res) => {
    console.log("pase por aca");
    let images = req.file ? req.file.filename : no - foto.jpg;
    console.log(req.body.marca_id)
    db.Producto.create({
      nombre_producto: req.body.name,
      precio: req.body.price,
      descuento: req.body.discount,
      estado: req.body.estado,
      stock: req.body.stock,
      categoria_id: req.body.category,
      descripcion: req.body.description,
      marca: req.body.marca_id,
      imagenes: images,
    }).then((product) => {
      res.redirect("/products");
    });
  },

  edit: (req, res) => {
    const idProduct = req.params.id;
    res.send("Modificar producto " + idProduct);
  },

  update: (req, res) => {
    res.send("Guardar el producto modificado");
  },

  destroy: (req, res) => {
    const idProduct = req.params.id;
    res.send("Borrado del producto " + idProduct);
  },
};

module.exports = productsController;
