const productsController = {
    "list": function (req,res) {
        const product = [
            {id: 1, name: "Menta egipcia"},
            {id: 2, name: "Boldo"},
            {id: 3, name: "Marcela"},
            {id: 4, name: "Te en Saquitos"},
        ];

        res.render("productList.ejs", {"product": product});
    }
};

module.exports = userController;