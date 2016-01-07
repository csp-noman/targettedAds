"use strict"

module.exports = function (sequelize, DataTypes){

	var Shows = sequelize.define ("Shows", {
        showId : {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: DataTypes.STRING(100),
        },
        startTime : {
            type : DataTypes.TIME(20),
        },
        endTime : {
            type : DataTypes.TIME(20),
        },
        day : {
            type: DataTypes.STRING(10),

        },

        timeSlotId : {
            type: DataTypes.INTEGER(11),

        },

        description : {
            type: DataTypes.STRING(100),

        },

        duration : {
            type: DataTypes.INTEGER(10),

        },

        channelId : {
            type: DataTypes.INTEGER(11),

        },

        createdByUserId : {
            type: DataTypes.INTEGER(11),

        },




	}, {
        freezeTableName : true,
        timestamps: false,
        tableName : 'Shows',
		classMethods: {
            associate: function (models) {
                //models.Category.belongsToMany(models.AppUser, {through: 'Group', foreignKey: 'categoryId'});
               //AccountType.hasMany (models.User, { foreignKey: 'AccountTypeId' });
            }
        }
	});

    return Shows;
};
