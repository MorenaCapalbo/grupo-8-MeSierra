const db = require("../../database/models");

let sequelize = require("sequelize");

module.exports = {

    index: (req, res) => {
        db.Usuario.findAll({
        }).then(function (respuesta) {
          let userApi = []
          respuesta.forEach(user =>{
            let item = {
                nombre_completo: user.nombre_completo,
                email: user.email,
                categoria: user.categoria,
                nombre_usuario:user.nombre_usuario,
            }
            userApi.push(item);
          })
        let respuestaCompleta = {
            count: userApi.length,
            users: userApi
        }
        res.json(respuestaCompleta);
        })
      }
    }