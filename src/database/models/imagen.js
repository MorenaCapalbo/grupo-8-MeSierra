module.exports = (sequelize, DataTypes) => {
    let alias = 'Imagen' // esto deberÃ­a estar en singular
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_archivo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
       
    }

    let config = {
        
        tableName: "imagenes",
        timestamps: false
    }
    const Imagen = sequelize.define(alias,cols,config)
    

    Imagen.associate = function(models) {
        Imagen.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "product_id"
        })

    }

    return Imagen
};