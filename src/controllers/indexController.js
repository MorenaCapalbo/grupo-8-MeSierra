const fs = require("fs");
const path = require("path");


const indexController = {
    
    home: (req, res) => {
        return res.render("../views/home");
    },

    about: (req, res) => 
    { res.send("Este es el about desde el controller");
}
}

module.exports = indexController;