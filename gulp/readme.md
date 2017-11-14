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
var autoprefixer = require("gulp-autoprefixer");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var smushit = require("gulp-smushit");
var rev = require("gulp-rev");
var revCollector = require("gulp-rev-collector");
var cleanCss = require("gulp-clean-css");

var task={
  "js":"src/js/*",
  "css":"src/css/*",
  "img":"src/img/*",
  "html":["src/html/*","!src/html/index.html"],
  "rev":"rev/**/*.json"
};

var options={
  //清除HTML注释
  removeComments:true,
  //压缩HTML
  collapseWhitespace:true,
  //省略布尔属性的值<input checked="true" /> ==> <input />
  collapseBooleanAttributes:true,
  //删除所有空格作属性值 <input id="" /> ==> <input />
  removeEmptyAttributes:true,
  //删除<script>的type="text/javascript"
  removeScriptTypeAttributes:true,
  //删除<style>和<link>的type="text/css"
  removeStyleLinkTypeAttributes:true,
  //压缩页面JS
  minifyJS:true,
  //压缩页面CSS
  minifyCSS:true
};

//压缩js
gulp.task("scripts",function(){
  return gulp.src(task.js)
             .pipe(rev())
             .pipe(gulp.dest("dist/js"))
             .pipe(rev.manifest())
             .pipe(gulp.dest("rev/js"));
});

//压缩css
gulp.task("miniCss",function(){
  return gulp.src(task.css)
             .pipe(autoprefixer({
               browsers:['last 20 versions','Android>=4.0'],
               cascade:true,
               remove:true
             }))
             .pipe(cleanCss())
             .pipe(rev())
             .pipe(gulp.dest("dist/css"))
             .pipe(rev.manifest())
             .pipe(gulp.dest("rev/css"));
});

//压缩img
gulp.task("miniImg",function(){
  return gulp.src(task.img)
             .pipe(smushit())
             .pipe(gulp.dest("dist/img"));
})

gulp.task("version",["scripts","miniCss","miniImg"],function(){
  return gulp.src([task.rev,task.html])
             .pipe(revCollector())
             .pipe(htmlmin(options))
             .pipe(rev())
             .pipe(gulp.dest("dist/html"));
});
```