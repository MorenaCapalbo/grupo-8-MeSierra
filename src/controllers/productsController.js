const productsController =  {
    index: (req,res) =>{
        return res.send("Listar todos los productos");
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