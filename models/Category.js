"use strict"

module.exports = function (sequelize, DataTypes){

	var Category = sequelize.define ("Category", {
        categoryId : {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
		name: DataTypes.STRING (50),
	}, {
        freezeTableName : true,
        timestamps: false,
        tableName : 'Category',
		classMethods: {
            associate: function (models) {
                models.Category.belongsToMany(models.AppUser, {through: 'Group', foreignKey: 'categoryId'});
                Category.hasMany (models.Advertisements, { foreignKey: 'categoryId' });
                Category.hasMany (models.Products, { foreignKey: 'categoryId' });
            }
        }
	});

    return Category;
};
