var gulp = require('gulp');
var uglify = require('gulp-uglify');
var stream = require('stream-combiner2');	

var browserSync = require("browser-sync");	
var reload = browserSync.reload;

var less = require("gulp-less");	
var cssmin = require("gulp-minify-css");	
var sourceMap = require("gulp-sourcemaps");	

var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var imagemin = require("gulp-imagemin");
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');


// var browserify = require("browserify");

gulp.task("imagemin",function(){
	gulp.src(["app/image/*.{png,jpg,gif,jpeg}"])
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],	//不要移除svg的viewbox属性
			use: [pngquant] 
		}))
		.pipe(gulp.dest("dist/image"))
});

gulp.task("less",function () {
	console.log("开始编译less文件");
	gulp.src(["app/less/*.less"])
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message%>')}))
		.pipe(less())
		.pipe(cssmin())
		.pipe(sourceMap.write())
		.pipe(gulp.dest("app/css"))
});

gulp.task("testwatch", function(){
	//监听less文件是否发生改变
	gulp.watch("app/**/*.less",['less']);
});

gulp.task('server',function(){
	browserSync({
		server:{
			baseDir: 'app'
		}
	});
	gulp.watch(["*.html","style/**/*.css","script/**/*.js"],{ cwd:'app'},reload)
});

gulp.task("default",function(){
	var str = stream.obj([
		uglify()
	]);

	str.on('error', console.error.bind(console));
	return str;
});
