"use strict"

module.exports = function (models){

    var express = require ("express");
    var router = express.Router ();


    router.get ('/:id', function (req, res) {
        models.AppUser.findOne ({
            where: {
                appUserId: req.params.id
            },
            include: [models.Category]
        }).then (function (user) {
            if (user) {
                res.status (200).json ({
                message: "User found",
                data: user,
                status : true
            });

            }
            else {
                res.status (404).json ({
                    message: "User not found",
                    
                    status : false
            });

            }
        }).catch (function (err) {
            res.status (500).json ({
                message: "Error occured",
                data: err,
                status : false
            });

        });
    });


    router.get ('/', function (req, res) {
        models.AppUser.findAll ({
            include: [models.Category]
        }).then (function (user) {
            if (user.length>0) {
                res.status (200).json ({
                message: "Users found",
                data: user,
                status : true
            });

            }
            else {
                res.status (404).json ({
                    message: "Users not found",
                    
                    status : false
            });

            }
        }).catch (function (err) {
            console.log (err)
            res.status (500).json ({
                message: "Error occured",
                data: err,
                status : false
            });

        });
    });

    router.post ('/', function (req, res) {
        var user = {
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            email: req.body.email,
            onlineShopping: req.body.onlineShopping,
            isHome: req.body.isHome,
            lng: req.body.lng,
            lat: req.body.lat
        };
        models.AppUser.create (user).then (function (user) {
            res.status (200).json ({
                message: "User created",
                data: user,
                status : true
            });

        }).catch (function (err) {
            res.status (500).json ({
                message: "Error occured",
                data: err,
                status : fasle
            });
        });
    });


    return router;
};
