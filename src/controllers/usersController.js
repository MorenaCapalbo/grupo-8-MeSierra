const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

// Codigo para que pueda leer los productos del json

const productsFilePath = path.join(__dirname, "../data/users.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));



const usersController =  {
    list: (req,res) =>{
        return res.render("../views/users");
    },

    loginView: (req,res) => {
        return res.render("../views/login");
},
    login: (req,res) => {
        db.Usuario.findOne({where: {nombre_usuario:req.body.nombre_usuario}})
        .then(function(user){
            let isPasswordOk = bcrypt.compareSync(req.body.contrasena, user.contrasena)
        if(!isPasswordOk) {
            // decirle al usuario que uno de los campos esta mal
        }
        req.session.user = user
        res.redirect("/")
    })

        // ver si la contrasena coincide con la de la base
        // si la contrasena esta bien y el mail tambien guardar en la sesion
        // si algo esta mal avisarle al usuario

    }
,
    registerView: (req,res) =>{
        return res.render("../views/register");
},
    register:async (req,res) =>{
        console.log(req.body)
      let user = await db.Usuario.findOne({where:{email:req.body.email}})
      if(user && user.nombre_usuario == req.body.nombre_usuario){
        // Logica para por si ya exite un usuario con el mismo mail
      } 
      db.Usuario.create({
        nombre_completo:req.body.nombre_completo,
        email: req.body.email,
        contrasena: bcrypt.hashSync(req.body.contrasena, 10),
        categoria: req.body.categoria,
        fotoUsuario: req.body.fotoUsuario,
      }) .then(function(){
        res.redirect("/")
      })
    }
}
// validaciones y middlewares

module.exports = usersController;