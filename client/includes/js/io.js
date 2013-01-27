var server = 'IP:PORT';

define(["http://" + server + "/socket.io/socket.io.js"], function() {
	var socket = io.connect('http://' + server);

	return socket;
});