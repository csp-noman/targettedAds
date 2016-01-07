"use strict"

module.exports = function (sequelize, DataTypes){

	var Advertisements = sequelize.define ("Advertisements", {
        advertisementId : {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: DataTypes.STRING(50),
        },
        description : {
            type: DataTypes.STRING(200),
        },
        productId : {
            type: DataTypes.INTEGER(11),
        },
        approvedBy : {
            type: DataTypes.STRING(30),
        },
        approvedAt : {
            type: DataTypes.DATE,
        },
        advertiserId : {
            type: DataTypes.INTEGER(11),
        },
        timingSlotId : {
            type: DataTypes.INTEGER(11),
        },
        categoryId : {
            type : DataTypes.INTEGER(11)
        },
        createdByUserId : {
            type: DataTypes.INTEGER(11),
        },
        status :{
            type : DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejectionReason : {
            type: DataTypes.STRING(100),
        },
        reviewed : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isScheduled : {
            type : DataTypes.BOOLEAN
        },
        isSent: {
            type: DataTypes.BOOLEAN
        },
        createdAt : {
            type: DataTypes.DATE,
        },
        updatedAt : {
            type: DataTypes.DATE,
        },
        deleteAt: {
            type: DataTypes.DATE,
        },


	}, {
        freezeTableName : true,
        tableName : 'Advertisements',
        timestamps: false,
		classMethods: {
            associate: function (models) {
               Advertisements.belongsTo (models.Category, { foreignKey: 'categoryId' });
               Advertisements.belongsTo (models.Products, { foreignKey: 'productId' });
            }
        }
	});

    return Advertisements;
};
