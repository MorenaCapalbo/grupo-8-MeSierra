const { resolveInclude } = require("ejs");
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;


// Codigo para que pueda leer los productos del json

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//Codigo que te transforma las comas (formato americano) en puntos (formato latam)

const toThousand = n => n.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ".")


const productsController =  {
    index: (req,res) =>{
        db.Producto.findAll({
            include: [{association: "Marcas"},{association: "Categorias"}]

        })
        .then (function (respuesta){
            return res.render("products",{
                respuesta, toThousand
            })
        })
    },

    detail: (req,res) => {

        const idProduct = req.params.id;
        res.send ("Detalle del producto " + idProduct);

},

    create: (req,res) =>{
        return res.render("../views/productCreate");

},

    store: (req,res) =>{
          res.json(req.body)

},

    edit: (req,res) =>{
            const idProduct = req.params.id;
            res.send("Modificar producto " + idProduct);
},

    update: (req,res) =>{
           res.send("Guardar el producto modificado");

},

    destroy: (req,res) =>{
            const idProduct = req.params.id;
           res.send("Borrado del producto " + idProduct);

}

}


module.exports = productsController;