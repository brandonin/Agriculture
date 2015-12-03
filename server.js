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


var server = app.listen(8888, function() {
 console.log("listening on port 8888");
});

var io = require('socket.io').listen(server)  // notice we pass the server object<br>

io.sockets.on('connection', function (socket) {

})
