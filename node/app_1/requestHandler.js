var exec = require("child_process").exec;

function start( response ){

	var content = "empty";
	// 直接执行系统命令
	// child_process.exec(cmd, [options], callback) 
	exec("ls -lah",function(err,stdout,stderr){
		response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	});
}

function unload(response){
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello Upload");
	  response.end();
}

exports.start = start;
exports.upload = upload;