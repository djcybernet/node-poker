define(["http", "socket.io"], function(http, socket) {
	var app = http.createServer();
	var io = socket.listen(app);

	app.listen('PORT');

	return io;
});