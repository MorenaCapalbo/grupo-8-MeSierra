module.exports = (sequelize, dataTypes) => {
  let alias = "Usuarios"; // esto deberÃ­a estar en singular

  let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: dataTypes.STRING,
    apellido: dataTypes.STRING,
    email: dataTypes.STRING,
    contrasena: dataTypes.STRING,
    avatar: dataTypes.STRING,
    categoria: dataTypes.INTEGER
};

  const Usuarios = sequelize.define(alias, cols);
  return Usuarios

};
