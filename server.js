var express = require("express");
var path = require("path");
var app = express();
var bodyParser= require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client")));

var mysql      = require('mysql');

var connectionpool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'agriculture'
});

//require('./server/config/sql.js');
require('./server/config/routes.js')(app, connectionpool);


app.listen(process.env.PORT || 8888, function(){
console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

