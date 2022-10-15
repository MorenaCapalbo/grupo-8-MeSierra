const fs = require("fs");
const path = require("path");

// Codigo para que pueda leer los productos del json

const productsFilePath = path.join(__dirname, "../data/users.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));



const usersController =  {
    list: (req,res) =>{
        return res.render("../views/users");
    },

    login: (req,res) => {
        return res.render("../views/login");
},

    register: (req,res) =>{
        return res.render("../views/register");
},
}

module.exports = usersController;