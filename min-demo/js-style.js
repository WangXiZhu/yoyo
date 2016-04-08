// module,放到全局中

;(function (window,document,undefined){

	function outer (){

	}
	window.outer = outer;	//暴露给外部，同时也封装，防止环境污染

})(window,document);


/*
 * 使用计时器的回调，将要回调执行的函数一并传到目标函数
 */

var id = setTimeout(function timer() {
  console.log('start setTimeout');
  someLongProcess(getRandomInt(2000, 4000), function() {
    setTimeout(timer, 3000);
  });
}, 3000);

function someLongProcess(duration, callback) {
  setTimeout(function() {
    console.log('long process: ' + duration);
    callback();
  }, duration);  
}

function getRandomInt(start, end){
	return Math.random()*(end-start).toFixed() + start;
}


/*
 * 如何在 dom ready后，怎么更好执行代码
 * 便于维护地做单元测试
 */


(function(myApp) {
	myApp.init = function() {
	// kick off your code
	};

	myApp.handleClick = function() {}; // etc...

}(window.myApp = window.myApp || {}));

// Only include at end of main application...
$(document).ready(function() {
 	 window.myApp.init();
});


var Application = (function() {
	function Application() {
	// kick off your code
	}

	Application.prototype.handleClick = function() {};

	return Application;
}());

// Only include at end of main application...
$(document).ready(function() {
 	 new Application();
});