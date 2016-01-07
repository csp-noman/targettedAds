"use strict"

module.exports = function (models){

    var express = require ("express");
    var router = express.Router ();


    router.get ('/', function (req, res) {
        models.Advertisements.findAll ({
            where : {
            	isScheduled : 1
            },include: [{
            	model : models.Category,
            	include : [models.Products, models.AppUser]
            }],
        }).then (function (advertisment){
            if (advertisment.length>0 && advertisment) {
                res.status(200).json ({
                    message: "advertisment have been found successfully",
                    data: advertisment,
                    status: true 
                });
            }
            else {
                res.status(404).json ({
                    message: "advertisment not found",
                    status: false 
                });

            }
        }).catch (function (err){
            console.log (err);
            res.status(400).json ({
                message: "An Error has been occured",
                data: err,
                status: false 
            });
        });
    });




    return router;
};
