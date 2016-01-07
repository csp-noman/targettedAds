"use strict"

module.exports = function (sequelize, DataTypes){

	var ShowsAdvertisements = sequelize.define ("ShowsAdvertisements", {
        id : {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        showId : {
            type: DataTypes.INTEGER(11),
        },
        advertisementId : {
            type: DataTypes.INTEGER(11),
        },
        adSentTime : {
            type: DataTypes.TIME(20),
        },
        adSentDate : {
            type: DataTypes.DATE,
        },




	}, {
        freezeTableName : true,
        tableName : 'ShowsAdvertisements',
        timestamps: false,
		classMethods: {
            associate: function (models) {
                //models.Category.belongsToMany(models.AppUser, {through: 'Group', foreignKey: 'categoryId'});
               //AccountType.hasMany (models.User, { foreignKey: 'AccountTypeId' });
            }
        }
	});

    return ShowsAdvertisements;
};
