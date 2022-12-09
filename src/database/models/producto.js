module.exports = (sequelize, DataTypes) => {
  let alias = "Producto"; // esto deberÃ­a estar en singular
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "productos",
    timestamps: false,
  };
  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    Producto.hasMany(models.Imagen, {
        as: "Imagenes",
        foreignKey: "producto_id"
    })

    Producto.belongsTo(models.Marca, {
      as: "Marcas",
      foreignKey: "marca_id",
    });

    Producto.belongsTo(models.Categoria, {
      as: "Categorias",
      foreignKey: "categoria_id",
    });
  };

  return Producto;
};
