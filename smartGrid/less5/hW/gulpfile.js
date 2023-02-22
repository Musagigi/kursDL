const gulp = require('gulp')
const del = require('del') // для удал-ия старых файлов из 'build'
const browserSync = require('browser-sync').create() // автоматически обнов. страницу, при измен. в файлах
const less = require('gulp-less'); // препроцессор
const concat = require('gulp-concat') // объединяет в один файл
const gulpIf = require('gulp-if')
const cleanCSS = require('gulp-clean-css') // убирает лишние пробелы, табы и т.д.
const autoprefixer = require('gulp-autoprefixer')
const gcmq = require('gulp-group-css-media-queries'); // объединяет медиа запросы по ширине
const sourcemaps = require('gulp-sourcemaps') // при объединении css файлов в один, сохраняет номера строк, css

// чтобы не прописывать флажки, можно в package.json прописать в scripts укороч. запуск
let isMinify = process.argv.includes('--mini') // forRelizBuild
let isMapForCss = process.argv.includes('--map') // forDevelop

function clean() {
	return del('./build/*')
}

function html() {
	return gulp.src('./src/**/*.html') // из
		.pipe(gulp.dest('./build')) // в (dest - destination - назначение)
		.pipe(browserSync.stream())
}

function styles() {
	return gulp.src('./src/css/main.less')
		.pipe(gulpIf(isMapForCss, sourcemaps.init()))
		// .pipe(concat('main.css'))
		.pipe(less())
		.pipe(gulpIf(isMinify, gcmq()))
		.pipe(gulpIf(isMinify, autoprefixer({})))
		.pipe(gulpIf(isMinify, cleanCSS({ level: 1 })))
		.pipe(gulpIf(isMapForCss, sourcemaps.write()))
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream())
}

function images() {
	return gulp.src('./src/img/**/*')
		.pipe(gulp.dest('./build/img'))
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './build/'
		}
	})
	gulp.watch('./src/css/**/*.less', styles)
	gulp.watch('./src/**/*.html', html)
}


// gulp.series - выполняет таски по очереди (завершится один, перейдет к другому)
// gulp.parallel - выполняет одновременно (нач. и заверш. в любой последовательности)
// чтобы не писать таски по Одному
let build = gulp.parallel(html, styles, images)
let buildWithClean = gulp.series(clean, build) // сначала очищаем build, потом переносим файлы

let watchDev = gulp.series(buildWithClean, watch)

gulp.task('build', buildWithClean)
gulp.task('dev', watchDev)
