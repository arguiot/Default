var project_name = "project";

var gulp = require("gulp"),
	rename = require("gulp-rename");
uglify = require("gulp-uglify");
babel = require("gulp-babel");
babili = require("gulp-babili");
rigger = require("gulp-rigger");
gulp.task("minify", function () {
	gulp.src("src/*.js")
	.pipe(babel({
		presets: ["env"]
	}))
    .pipe(uglify())
    .pipe(rename({basename: project_name, suffix: ".min"}))
    .pipe(gulp.dest("dist/light"));
});
gulp.task("copy", function () {
	gulp.src("src/*.js")
	.pipe(babel({
		presets: ["env"]
	}))
	.pipe(rename({basename: project_name}))
    .pipe(gulp.dest("dist/light"));
});
gulp.task("modern", function () {
	gulp.src("src/*.js")
	.pipe(rename({basename: project_name, suffix: ".es6"}))
    .pipe(gulp.dest("dist/light"));
});
gulp.task("modern-minify", function () {
	gulp.src("src/*.js")
	.pipe(babili({
		mangle: {
			keepClassName: true
		}
	}))
    .pipe(rename({basename: project_name, suffix: ".es6.min"}))
    .pipe(gulp.dest("dist/light"));
});
gulp.task("minify-full", function () {
	gulp.src("src/*.js")
	.pipe(rigger())
	.pipe(babel({
		presets: ["env"]
	}))
    .pipe(uglify())
    .pipe(rename({basename: project_name, suffix: ".min"}))
    .pipe(gulp.dest("dist"));
});
gulp.task("copy-full", function () {
	gulp.src("src/*.js")
	.pipe(rigger())
	.pipe(babel({
		presets: ["env"]
	}))
	.pipe(rename({basename: project_name}))
    .pipe(gulp.dest("dist"));
});
gulp.task("modern-full", function () {
	gulp.src("src/*.js")
	.pipe(rigger())
	.pipe(rename({basename: project_name, suffix: ".es6"}))
    .pipe(gulp.dest("dist"));
});
gulp.task("modern-minify-full", function () {
	gulp.src("src/*.js")
	.pipe(rigger())
	.pipe(babili({
		mangle: {
			keepClassName: true
		}
	}))
    .pipe(rename({basename: project_name, suffix: ".es6.min"}))
    .pipe(gulp.dest("dist"));
});
gulp.task("default", [ "minify", "copy", "modern", "modern-minify", "minify-full", "copy-full", "modern-full", "modern-minify-full" ]);
