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

var liveload = require("gulp-liveload");
var tinylr = require('tiny-lr');	//liveload,必须创建在进程和应用中
var server = tinylr();


var rename = require('gulp-rename');     //重命名
var concat  = require('gulp-concat');    //合并文件
var clean = require('gulp-clean');   	

var jshint = require("gulp-jshint");

var port = 35729;

//html
gulp.task("html", function(){
	var htmlSrc = "src/*.html",
		htmlDst = "dist";

	gulp.src(htmlSrc)
		.pipe(liveload(server))
		.pipe(gulp.dest(htmlDst))
});


//压缩图片
gulp.task("imagemin",function(){
	gulp.src(["src/image/*.{png,jpg,gif,jpeg}"])
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],	//不要移除svg的viewbox属性
			use: [pngquant] 
		}))
		.pipe(gulp.dest("dist/image"))
});

// less -> css
gulp.task("less",function () {
	gulp.src(["src/less/*.less"])
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message%>')}))
		.pipe(less())
		.pipe(cssmin())
		.pipe(sourceMap.write())
		.pipe(gulp.dest("src/css"))
});


//监听事件
gulp.task("watch", function(){
	//监听less文件是否发生改变

	server.listen(port, function(err){
        if (err) {
            return console.log(err);
        }

        // 监听html
        gulp.watch('src/*.html', function(event){
            gulp.run('html');
        })

        // 监听css
        gulp.watch('src/**/*.less', function(){
            gulp.run('css');
        });

        // 监听images
        gulp.watch('src/images', function(){
            gulp.run('images');
        });

        // 监听js
        gulp.watch('src/js/*.js', function(){
            gulp.run('js');
        });

    });
});


// 启动服务器
gulp.task('server',function(){
	browserSync({
		server:{
			baseDir: 'src'
		}
	});
	gulp.watch(["*.html","style/**/*.css","script/**/*.js"],{ cwd:'src'},reload)
});


//js 处理

gulp.task("js", function(){
	var jsSrc = "./src/*.js";
	var jsDst = "./dist/js";

	gulp.src(jsSrc)
		.pipe(jshint(".jshintrc"))
		.pipe(concat("main.js"))
		.pipe(gulp.dest(jsDst))
		.pipe(rename({ suffix : ".min"}))
		.pipe(uglify())
		.pipe(liveload(server))
		.pipe(gulp.dest(jsDst));
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js', './dist/images'], {read: false})
        .pipe(clean());
});


// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html','css','images','js');
});
