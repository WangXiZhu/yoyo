## yoyo

总结经常使用的css，js代码

###webpack+gulp
	
学习使用webpack+gulp，并搭建脚手架


[https://docs.npmjs.com/](https://docs.npmjs.com/)

npm init -> package.json

npm判断该文件下的dependencies参数，并通过npm install , npm update 安装 node_modules

类似于bower.

#### 功能点

* browser-sync

文件修改后自动刷新 , 浏览器异步，同时可以不同终端可以同时刷新

* gulp-minify-css

压缩css文件

* gulp-sourcemaps

方便查找文件

* gulp-notify ,gulp-plumber
html5_draggable
README.md
svg-icon
当发生异常时提示错误 

* stream-combiner2

处理可能中途出现的错误

* gulp-imagemin
压缩图片

* imagemin-pngquant
深度压缩图片

* vinyl-fs
一种“虚拟文件格式”,如果我们需要将gulp和（或）gulp插件与常规的可读流一起使用，我们就需要先把可读流转换为vinyl。

	实现了 src() 和 dest() 方法
#### gulp学习

* gulp的函数
	
	* gulp.task( name , [,deps] ,fn)
		deps的类型为Array
		创建一个任务，可以通过 gulp name的名称来执行，

	* pipe
		管道，就是把很多功能串联起来，这样就可以执行多条任务，类似jquery的链式结构

	* watch(glob , fn)
		监听，当内容发生改变，执行fn

	* gulp.dest(glob)
		返回一个可写的stream

	* gulp.run(tasks...)
		尽可能多的并行运行多个tasks(多个任务列表),它重新使用可读流中的文件名，然后在必要时创建文件夹


## 思考
在编写gulpfile.js的时候 发现使用了大量的引入文件。难道我们实际开发中要挨着百度？太烦了吧！所以我们应该减少依赖，减少配置。