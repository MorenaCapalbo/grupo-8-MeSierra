const fs = require("fs");
const path = require("path");


const indexController = {
    
    home: (req, res) => {
        res.send("Esta es la home desde el controller");
    },

    about: (req, res) => 
    { res.send("Este es el about desde el controller");
}
}

module.exports = indexController;