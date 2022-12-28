const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const { check, validationResult, body } = require("express-validator");

//Aquí requiero la Base  de Datos.
const db = require("../database/models/");

//Aquí hago la asociación al módelo correspondiente
const User = db.User;

const usuariosController = {
  login: function (req, res) {      
    res.render(path.resolve(__dirname, "../views/usuarios/login"));
  },
  ingresar: (req, res) => {
    db.Usuarios.findOne({
      where: { email: req.body.email },
    }).then((usuario) => {
      //Aquí guardo los errores que vienen desde la ruta, valiendome del validationResult
      let errors = validationResult(req);

      let usuarioLogueado = [];

      //Aquí verifico si la clave que está colocando es la misma que está hasheada en la Base de datos - El compareSync retorna un true ó un false
      if (
        bcrypt.compareSync(req.body.contrasena, usuario.contrasena) === false
      ) {
        return res.render(path.resolve(__dirname, "../views/usuarios/login"), {
          errors: [{ msg: "Credenciales invalidas" }],
        });
      } else {
        //Aquí guardo en SESSION al usuario logueado
        req.session.usuarioLog = usuario.dataValues;
      }
      //Aquí verifico si el usuario le dio click en el check box para recordar al usuario
      if (req.body.recordarme) {
        res.cookie("email", req.session.usuarioLog.email, {
          maxAge: 1000 * 60 * 60 * 24,
        });
      }

      return res.redirect("/usuarios/profile"); //Aquí ustedes mandan al usuario para donde quieran (Perfil- home)
    });
  },

  registro: function (req, res) {
    res.render(path.resolve(__dirname, "../views/usuarios/registro"));
  },
  //Este es el método donde guardo al usuario que se está registrando
  create: (req, res) => {
    //En esta variable guardo lo enviado desde la ruta, con respecto a los errores encontrados en la carga de los datos por parte del usuario
    let errors = validationResult(req);
    //return res.send(errors);
    //Aquí determino si hay ó no errores encontrados
    if (!errors.isEmpty()) {
      return res.render(path.resolve(__dirname, "../views/usuarios/registro"), {
        errors: errors.errors,
        old: req.body,
      });
    }
    //Si todo marcha sobre ruedas, entonces
    // Generamos el usuario a partir de los datos del request
    // - Ignoramos repassword, ya que no nos interesa guardarla
    // - Hasheamos la contraseña

    db.Usuarios.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      contrasena: bcrypt.hashSync(req.body.contrasena, 10),
      avatar: req.file ? req.file.filename : "",
      categoria: req.body.categoria,
    })
      .then(function () {
        return res.redirect("/usuarios/login");
      })
      .catch((error) => console.log(error));
  },

  salir: (req, res) => {
    res.cookie("email", null, { maxAge: -1 });
    //console.log(req.session)
    req.session.destroy();
    res.redirect("/");
  },
  perfil: (req, res) => {
    res.render(path.resolve(__dirname, "../views/usuarios/profile"));
  }
}

module.exports = usuariosController;
