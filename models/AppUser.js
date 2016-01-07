"use strict"

module.exports = function (sequelize, DataTypes){

	var Category = sequelize.define ("AppUser", {
        appUserId : {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
		FirstName: DataTypes.STRING (50),
        LastName: DataTypes.STRING (50),
        email: DataTypes.STRING (100),
	}, {
        freezeTableName : true,
        tableName : 'AppUser',
        timestamps: false,
		classMethods: {
            associate: function (models) {
                models.AppUser.belongsToMany(models.Category, {through: 'Group', foreignKey: 'appUserId'});
               //AccountType.hasMany (models.User, { foreignKey: 'AccountTypeId' });
            }
        }
	});

    return Category;
};
