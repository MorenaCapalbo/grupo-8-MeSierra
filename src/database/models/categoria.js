module.exports = (sequelize, DataTypes) => {
    let alias = 'Categoria' // esto deberÃ­a estar en singular
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_categoria: {
            type: DataTypes.STRING,
            allowNull: false
        }
       
    }

    let config = {
        
        tableName: "categorias",
        timestamps: false
    }
    const Categoria = sequelize.define(alias,cols,config)

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "categoria_id",
        })

    }

    return Categoria
};