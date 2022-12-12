module.exports = (sequelize, DataTypes) => {
  let alias = "Usuario"; // esto deberÃ­a estar en singular
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  };

  let config = {
    tableName: "usuarios",
    timestamps: false,
  };
  const Usuario = sequelize.define(alias, cols, config);
  return Usuario
};
