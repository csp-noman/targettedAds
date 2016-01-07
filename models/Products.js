"use strict"

module.exports = function (sequelize, DataTypes){

	var Products = sequelize.define ("Products", {
        productId : {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING (30),
        price: DataTypes.INTEGER (11),
        brand: DataTypes.STRING (30),
        description: DataTypes.STRING (100),
        imageThumbURL : DataTypes.STRING (200),
        imageURL : DataTypes.STRING (200),
        advertiserId : DataTypes.STRING (200),
        createdByUserId: DataTypes.INTEGER (11),
        categoryId: DataTypes.INTEGER (11),
        isDeleted: DataTypes.BOOLEAN

	}, {
        freezeTableName : true,
        tableName : 'Products',
        timestamps: false,
		classMethods: {
            associate: function (models) {
                //models.Category.belongsToMany(models.AppUser, {through: 'Group', foreignKey: 'categoryId'});
               Products.hasMany (models.Advertisements, { foreignKey: 'productId' });
               Products.belongsTo (models.Category, { foreignKey: 'categoryId' });
            }
        }
	});

    return Products;
};
