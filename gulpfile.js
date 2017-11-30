'use strict';

// --------------------------------------------------------------------------
// Plugins
// --------------------------------------------------------------------------

var gulp         = require('gulp'),
	browserSync  = require('browser-sync'),
	watch 		 = require('gulp-watch'),
	runSequence  = require('run-sequence'),

	concat		 = require('gulp-concat'),
	plumber 	 = require('gulp-plumber'),

	pug          = require('gulp-pug'),

	sass 		 = require('gulp-sass'),
	uncss        = require('gulp-uncss'),
	autoprefixer = require('gulp-autoprefixer'),
	minify_css   = require('gulp-minify-css'),
	cleanCSS     = require('gulp-clean-css'),

	
	uglify 		 = require('gulp-uglify'),
	
	
	spritesmith  = require('gulp.spritesmith'),
	cheerio 	 = require('gulp-cheerio'),
	svgmin       = require('gulp-svgmin'),
	svgSprite    = require("gulp-svg-sprite"),
	replace      = require('gulp-replace'),

	clean        = require('del'),

	zip      	 = require('gulp-zip'),

	notify      = require("gulp-notify"),

	yaml         = require('require-yaml'),
	consolidate  = require('gulp-consolidate'),
	cache        = require('gulp-cache'),

	webpack       = require('webpack'),
	webpackStream = require('webpack-stream'),
	path          = require('path'),
	babel 		  = require("gulp-babel");





// --------------------------------------------------------------------------
// Settings
// --------------------------------------------------------------------------


var src = {
	pagelist: 'src/yaml/index.yaml',
	html: 'src/pug/**/*.pug',
	fonts: 'src/fonts/*',
	scss: 'src/scss/**/*.scss',
	js: 'src/js/**/*.js',
	images: 'src/images/**/*',
	
	spriteImages: 'src/sprites/_images/*.png',
	spriteSvg: 'src/sprites/_svg/*.svg'
};

var dist = {
	pagelist: 'dist/',
	html: 'dist/',
	fonts: 'dist/fonts/',
	css: 'dist/css',
	js: 'dist/js',
	images: 'dist/images/',

	spriteImages: 'dist/sprites/',
	spriteSvg: 'dist/sprites/'
};


// --------------------------------------------------------------------------
// Zip
// --------------------------------------------------------------------------



gulp.task('zip', () => {

	function correctNumber(i) {
	    if (i < 10) {
	        i = "0" + i;
	    }
	    return i;
	}

	let zipName = path.basename(__dirname);
	let zipDate = new Date();
	let zipDatetime = zipDate.getFullYear() + '-' + (zipDate.getMonth() + 1) + '-' + zipDate.getDate() + 'T' + correctNumber(zipDate.getHours()) + ':' + correctNumber(zipDate.getMinutes())

	
    gulp.src(['./**', '!./node_modules/', '!./node_modules/**', '!./*.zip'])
        .pipe(zip(zipName + '__' + zipDatetime + '.zip'))
        .pipe(gulp.dest('./'))
});


// --------------------------------------------------------------------------
// Sprites
// --------------------------------------------------------------------------


gulp.task('spriteImages', function () {
	var spriteData = gulp.src(src.spriteImages).pipe(spritesmith({

		algorithm: 'binary-tree',
		padding: 10,

		cssName: '_sprites.scss',
		cssFormat: 'scss',

	    imgName: 'sprite.png',
	    imgPath: '../sprites/sprite.png',

	    cssTemplate: 'src/sprites/_templates/scss.template.handlebars'

	}));
	spriteData.img.pipe(gulp.dest('dist/sprites/'));
	spriteData.css.pipe(gulp.dest('src/sprites/'));
	return spriteData;
});



gulp.task('spriteSvg', function () {
    return gulp
        .src(src.spriteSvg)
        .pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
        	mode: {
				symbol: {
					dest: "",
					prefix : '.',
            		dimensions : '.',
					sprite: "sprite.svg",
					render: {
						scss: {
							dest:'../../src/sprites/_spritesSvg.scss',
							template: "src/sprites/_templates/scss.templateSvg.handlebars"
						}
					}
				}
			}
			
        }))
        .pipe(gulp.dest('dist/sprites/'));
});

// --------------------------------------------------------------------------
// Html or Pug
// --------------------------------------------------------------------------

gulp.task('html', function() {

	return gulp.src(src.html)
			
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(dist.html))
		.pipe(browserSync.reload({ stream: true }))

});

// --------------------------------------------------------------------------
// Fonts
// --------------------------------------------------------------------------

gulp.task('fonts', function() {
    gulp.src(src.fonts)
        .pipe(gulp.dest(dist.fonts))
        .pipe(browserSync.reload({ stream: true }))
});


// --------------------------------------------------------------------------
// Images
// --------------------------------------------------------------------------


gulp.task('images', function() {

	return gulp.src(src.images)
		.pipe(gulp.dest(dist.images))
		.pipe(browserSync.reload({ stream: true }))

});

// --------------------------------------------------------------------------
// Scss
// --------------------------------------------------------------------------

gulp.task('scss', function() {

	return gulp.src(src.scss)
		
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer({
		    browsers: ['last 2 versions', '> 1%', 'ie 9'],
		    cascade: false
		}))

		// .pipe(uncss({
		// 	html: ['src/**/*.html'],
		// 	ignore: [/\.is-*/, /\.flexboxlegacy/, /\.backgroundblendmode/, /\.fancybox*/, /\.scroll*/, /\.jq-*/]
		// }))

		.pipe(concat('app.min.css'))
		.pipe(minify_css())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		
		.pipe(gulp.dest(dist.css))
		.pipe(browserSync.reload({ stream: true }))

});


// --------------------------------------------------------------------------
// Js
// --------------------------------------------------------------------------


gulp.task('js', function() {
  return gulp.src(src.js)
    .pipe(webpackStream(
    	require('./webpack.config.js')
    ))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({ stream: true }));
});

// --------------------------------------------------------------------------
// PageList
// --------------------------------------------------------------------------

gulp.task('pages', function() {
	delete require.cache[require.resolve(__dirname + '/src/yaml/index.yaml')]
	var pages = require(__dirname + '/src/yaml/index.yaml');
	return gulp.src(__dirname + '/src/yaml/index.html')
		.pipe(consolidate('lodash', {
			pages: pages
		}))
		.pipe(gulp.dest(dist.pagelist))
		.pipe(browserSync.reload({ stream: true }));

});

// --------------------------------------------------------------------------
// Clean
// --------------------------------------------------------------------------

gulp.task('clean', function() {
	return clean.sync('dist/');
});

// --------------------------------------------------------------------------
// Watch
// --------------------------------------------------------------------------


gulp.task('watch', function() {
	
	gulp.watch(src.spriteImages, ['spriteImages']);
	gulp.watch(src.spriteSvg, ['spriteSvg']);

	gulp.watch(src.pagelist, ['pages']);
	gulp.watch(src.html, ['html']);
	gulp.watch(src.fonts, ['fonts']);
	gulp.watch(src.images, ['images']);
	gulp.watch(src.scss, ['scss']);
	gulp.watch(src.js, ['js']);

	browserSync.init({
		server: 'dist/',
		port: 8080,
		open: true,
    	notify: false
	});
	
});


// Gulp

gulp.task('default', ['clean', 'scss', 'html', 'js', 'fonts', 'images', 'spriteImages', 'spriteSvg', 'pages', 'watch']);


