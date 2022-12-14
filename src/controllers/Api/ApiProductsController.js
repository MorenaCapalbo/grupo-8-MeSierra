const db = require("../../database/models");

let sequelize = require("sequelize");

module.exports = {

    index: (req, res) => {
        db.Producto.findAll({
          include: [
            { association: "Marcas" },
            { association: "Categorias" },
            { association: "Imagenes" },
          ],
        }).then(function (respuesta) {
          return res.json(respuesta)
        })
      },
    
      detalleProducto: (req, res) => {
        const idProduct = req.params.id;
        db.Producto.findByPk(idProduct, {
          include: [{ association: "Marcas" }, { association: "Categorias" }],
        }).then(function (producto) {
          res.json(producto)
        });
      },
    }


