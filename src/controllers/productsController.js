const productsController =  {
    list: (req,res) =>{
        return res.render("productList", {});
    },

    create: (req,res) => {
        return res.render("productCreate", {})
    },

    detail: (req,res) => {

        return res.send("Detalle del producto " + req.params.id)
},

    edit: (req,res) => {

        return res.send ("Formulario de edicion de producto " + req.params.id)
}
}

module.exports = productsController;