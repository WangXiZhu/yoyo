var http = require("http");
var url = require("url");
// var route = require("router");

exports.start = function(route,handle){

	http.createServer(onrequest).listen(8888);	

	function onrequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		console.info("pathname is "+ pathname);
		route(handle, pathname, response);	
	}
	console.log("has started");
}
