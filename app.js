
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookieparser');
var logger = require ('morgan');


var routes = require('./routes');
var models = require('./models');
var app = express();


app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({ extended: false }));



app.use ("/category", routes.Category);
app.use ("/group", routes.Group);
app.use ("/show", routes.Show);
app.use ("/advertisement", routes.Advertisement);
app.use ("/user", routes.User);


//models.sequelize.sync ().then (function () {
  app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
//});
