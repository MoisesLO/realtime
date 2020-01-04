var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
	res.status(200).send("Hola Mundo");
});

server.listen(8080, function(){
	console.log('el servidor esta corriendo en http://localhost:8080');
});