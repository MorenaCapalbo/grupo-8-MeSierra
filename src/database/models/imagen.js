module.exports = (sequelize, DataTypes) => {
    let alias = 'Imagen' // esto deberÃ­a estar en singular
    let cols = {
     
        nombre_archivo: {
            type: DataTypes.STRING
        },

        producto_id: {
            type: DataTypes.INTEGER
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
            foreignKey: "producto_id"
        })

    }

    return Imagen
};