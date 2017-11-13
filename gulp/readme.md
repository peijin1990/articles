# gulp知识整理

> gulp使用的前提是已经安装node.js，以及在本地文件夹中 ```npm init ```package.json文件。

### 安装
1.全局安装 ```npm install gulp -g```
2.本地安装 ```npm install gulp --save-dev```
3.插件安装 ```npm install gulp-uglify --save-dev```
> gulp-uglify是gulp中的js压缩插件，[gulp插件](https://gulpjs.com/plugins/)的使用方式类似于sublime text插件，需要自己去选择适合的插件。
> 一般情况下，我们需要安装多个插件，以空格分开。比如
> ```npm install gulp-clean-css gulp-uglify gulp-rev gulp-rev-replace --save--dev```

### 简单的例子
```
var gulp = require("gulp");
//uglify是js压缩插件
var uglify = require("gulp-uglify");
//concat是合并文件插件，可以是js/css，并且给新合并的插件重命名
var concat = require("gulp-concat");
//rename重命名插件
var rename = require("gulp-rename");
//clean-css是css压缩插件
var cleanCss = require("gulp-clean-css");
//smushit是img压缩插件
var smushit = require("gulp-smushit");

gulp.task("miniJs",function(){
    return gulp.src("js/*.js")
               .pipe(concat("main.js"))
               .pipe(gulp.dest("dist/js"))
               .pipe(rename(main.min.js))
               .pipe(uglify())
               .pipe(gulp.dest("dist/js"));

    });

gulp.task("minCss",function(){
    return gulp.src("css/*.css")
               .pipe(concat("main.css"))
               .pipe(gulp.dest("dist/css"))
               .pipe(rename("main.min.css"))
               .pipe(cleanCss({compatibility:"ie8"}))
               .pipe(gulp.dest("dist/css"));
    });

gulp.task("miniCss",function(){
    return gulp.src("img/*")
               .pipe(smushit())
               .pipe(gulp.dest("dist/img"));
    });

gulp.task("default",["miniJs","miniCss","miniImg"]);
```