const gulp = require('gulp')
const del = require('del')
const browserSync = require('browser-sync').create() //обнов. страницу, при измен.
const sass = require('gulp-sass')(require('sass'));
const gulpIf = require('gulp-if')
const cleanCSS = require('gulp-clean-css') // убирает лишние пробелы, табы и т.д.
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const gcmq = require('gulp-group-css-media-queries'); // объединяет медиа запросы
const sourcemaps = require('gulp-sourcemaps') // карта по css

// можно в package.json прописать в scripts укороч. запуск
let isMinify = process.argv.includes('--mini') // forRelizBuild
let isMapForDevelop = process.argv.includes('--map') // forDevelop

function clean() {
	return del('./build/*')
}

function html() {
	return gulp.src('./src/**/*.html') // из
		.pipe(gulp.dest('./build')) // в (dest - destination - назначение)
		.pipe(browserSync.stream())
}

function styles() {
	return gulp.src('./src/css/main.scss')
		.pipe(gulpIf(isMapForDevelop, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulpIf(isMinify, gcmq()))
		.pipe(gulpIf(isMinify, autoprefixer({})))
		.pipe(gulpIf(isMinify, cleanCSS({ level: 1 })))
		.pipe(gulpIf(isMapForDevelop, sourcemaps.write()))
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream())
}

function images() {
	return gulp.src('./src/img/**/*')
		.pipe(gulp.dest('./build/img'))
}

function scripts() {
	return gulp.src('./src/js/**/*.js')
		.pipe(gulpIf(isMapForDevelop, sourcemaps.init()))
		.pipe(gulpIf(isMinify, babel()))
		.pipe(gulpIf(isMinify, uglify()))
		.pipe(concat('main.js'))
		.pipe(gulpIf(isMapForDevelop, sourcemaps.write()))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream())
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './build/'
		}
	})
	gulp.watch('./src/css/**/*.scss', styles)
	gulp.watch('./src/**/*.html', html)
	gulp.watch('./src/js/**/*.js', scripts)
}


// gulp.series - выполняет таски по очереди (завершится один, перейдет к другому)
// gulp.parallel - выполняет одновременно (нач. и заверш. в любой последовательности)
let build = gulp.parallel(html, styles, images, scripts)
let buildWithClean = gulp.series(clean, build)

let watchDev = gulp.series(buildWithClean, watch)

gulp.task('build', buildWithClean)
gulp.task('dev', watchDev)
