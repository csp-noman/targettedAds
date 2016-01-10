"use strict"

module.exports = function (models){

    var express = require ("express");
    var router = express.Router ();


    router.get ('/', function (req, res) {
        models.Shows.findAll ().then (function (Shows){
            if (Shows.length>0 && Shows) {
                res.status(200).json ({
                    message: "Shows have been found successfully",
                    data: Shows,
                    status: true 
                });
            }
            else {
                res.status(404).json ({
                    message: "Shows not found",
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
