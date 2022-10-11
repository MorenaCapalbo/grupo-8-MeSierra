const productsController =  {
    list: (req,res) =>{
        return res.send("Listado de productos desde el controlador")
    },

    create: (req,res) => {
        return res.send("Formulario de creacion de producto")
    },

    detail: (req,res) => {

        return res.send("Detalle del producto " + req.params.idDetail)
},

    edit: (req,res) => {

        return res.send ("Formulario de edicion de producto")
}
}

module.exports = productsController;