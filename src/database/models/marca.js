module.exports = (sequelize, DataTypes) => {
    let alias = 'Marca' // esto deberÃ­a estar en singular
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_marca: {
            type: DataTypes.STRING,
            allowNull: false
        }
       
    }

    let config = {
        
        tableName: "marcas",
        timestamps: false
    }
    const Marca = sequelize.define(alias,cols,config)
    

    Marca.associate = function(models) {
        Marca.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "marca_id"
        })

    }

    return Marca
};