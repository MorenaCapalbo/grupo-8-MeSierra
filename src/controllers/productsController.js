const fs = require("fs");
const path = require("path");

// Codigo para que pueda leer los productos del json

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//Codigo que te transforma las comas (formato americano) en puntos (formato latam)

const toThousand = n => n.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ".")


const productsController =  {
    index: (req,res) =>{
        return res.render("products",{
            products, toThousand

        })
    },

    detail: (req,res) => {

        const idProduct = req.params.id;
        res.send ("Detalle del producto " + idProduct);

},

    create: (req,res) =>{
        return res.send("Formulario de creacion de producto");

},

    store: (req,res) =>{
           return res.send("Guardado de producto");

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