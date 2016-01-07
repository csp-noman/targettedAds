"use strict"

module.exports = function (models){

    var express = require ("express");
    var router = express.Router ();


    router.get ("/user/:id", function (req, res){
        models.AppUser.findOne ({
            where: {
                appUserId: req.params.id
            },
            include: [models.Category]
        }).then (function (group){
            if (group) {
                res.status(200).json ({
                    message: "Group has been found successfully",
                    data: group,
                    status: true 
                });
            }
            else {
                res.status(404).json ({
                    message: "Group not found",
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
        models.AppUser.findAll ({
            include: [models.Category]
        }).then (function (group){
            if (group.length>0 && group) {
                res.status(200).json ({
                    message: "groups have been found successfully",
                    data: group,
                    status: true 
                });
            }
            else {
                res.status(404).json ({
                    message: "groups not found",
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
    

    router.post ("/", function (req, res){
        console.log (req.body.categoryId);
        console.log (req.body.userId);
    
        models.Group.create ({
            categoryId: req.body.categoryId,
            appUserId: req.body.userId
        }).then (function (group){
            res.status (201).json ({
                message: "User has been added to group",
                data: group,
                status: true
            });
        }).catch (function (err){
            //console.log (err);
            res.status(400).json ({
                message: "An Error has been occured",
                data: err,
                status: false 
            });
        });

    });


    return router;
};
