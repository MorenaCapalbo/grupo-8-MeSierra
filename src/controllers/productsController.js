const { resolveInclude } = require("ejs");
const fs = require("fs");
const path = require("path");
const { formatWithOptions } = require("util");
const db = require("../database/models");
const sequelize = db.sequelize;

// Codigo para que pueda leer los productos del json

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//Codigo que te transforma las comas (formato americano) en puntos (formato latam)

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ".");

const productsController = {
  index: (req, res) => {
    db.Producto.findAll({
      include: [
        { association: "Marcas" },
        { association: "Categorias" },
        { association: "Imagenes" },
      ],
    }).then(function (respuesta) {
      return res.render("products", {
        respuesta,
        toThousand,
      });
    });
  },

  detail: (req, res) => {
    const idProduct = req.params.id;
    db.Producto.findByPk(idProduct, {
      include: [{ association: "Marcas" }, { association: "Categorias" }],
    }).then(function (producto) {
      return res.render("productDetail", {
        producto,
        toThousand,
      });
    });
  },

  create: (req, res) => {
    db.Marca.findAll().then((marcas) => {
      res.render("../views/productCreate", {
        marcas,
      });
    });
  },

  store: async (req, res) => {
    let imagesSelect = req.file ? req.file.filename : no - foto.jpg;
    let NuevoProducto = 1;
    await db.Producto.create({
      nombre_producto: req.body.name,
      precio: Number(req.body.price),
      descuento: Number(req.body.discount),
      estado: req.body.estado,
      stock: Number(req.body.stock),
      categoria_id: req.body.category,
      descripcion: req.body.description,
      marca_id: Number(req.body.marca),
    }).then((producto) => {
      NuevoProducto = producto;
    });
    db.Imagen.create({
      nombre_archivo: imagesSelect,
      producto_id: Number(NuevoProducto.id),
    }).then((product) => {
      res.redirect("/products");
    });
  },

  edit: async (req, res) => {
    const productById = req.params.id;
    const marcas = await db.Marca.findAll()
   await db.Producto.findByPk(productById, {
      include: [
        { association: "Marcas" },
        { association: "Categorias" },
        { association: "Imagenes" },
      ],
    }).then((respuesta) => {
      return res.render("productEdit", { respuesta,marcas, toThousand });
    });
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
