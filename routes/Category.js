"use strict"

module.exports = function (models){

    var express = require ("express");
    var router = express.Router ();


    router.get ("/:id", function (req, res){
        models.Category.findOne ({
            where: {
                categoryId: req.params.id
            }
        }).then (function (category){
            if (category) {
                res.status(200).json ({
                    message: "Category has been found successfully",
                    data: category,
                    status: true 
                });
            }
            else {
                res.status(404).json ({
                    message: "Category not found",
                    status: false 
                });

            }
        }).catch (function (err){
            res.status(400).json ({
                message: "An Error has been occured",
                data: err,
                status: false 
            });
        });

    });

    router.get ("/", function (req, res){
        models.Category.findAll ({
        }).then (function (category){
            if (category.length>0 && category) {
                res.status(200).json ({
                    message: "categories has been found successfully",
                    data: category,
                    status: true 
                });
            }
            else {
                res.status(404).json ({
                    message: "Categories not found",
                    status: false 
                });

            }
        }).catch (function (err){
            res.status(400).json ({
                message: "An Error has been occured",
                data: err,
                status: false 
            });
        });

    });
    return router;
};
