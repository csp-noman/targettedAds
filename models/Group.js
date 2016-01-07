"use strict"

module.exports = function (sequelize, DataTypes){

	var Group = sequelize.define ("Group", {
        groupId : {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
		categoryId: DataTypes.INTEGER (11),
        appUserId: DataTypes.INTEGER  (11),
        createDateTime: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
	}, {
        timestamps: false,
        freezeTableName : true,
        tableName : 'Group',
		classMethods: {
            associate: function (models) {
               //AccountType.hasMany (models.User, { foreignKey: 'AccountTypeId' });
            }
        }
	});

    return Group;
};
