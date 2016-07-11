
// exports.route = function route(pathname){
// 	console.log("pathname :"+ pathname);
// }

// exports.route = route;

// handle为需要处理的参数
var route = function (handle, pathname, response){
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response);
	} else{
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("11111");
		response.end();
	}
}

exports.router = route;