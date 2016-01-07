
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookieparser');
var expressSession = require('express-session');
var favicon = require('serve-favicon');
var passport = require('passport');
var logger = require ('morgan');
var passportLocal = require('passport-local');


var routes = require('./routes');
var models = require('./models');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({ extended: false }));



app.use ("/category", routes.Category);
app.use ("/groups", routes.Group);
app.use ("/notifications", routes.Notification);


//models.sequelize.sync ().then (function () {
    app.listen(3000, function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
//});
