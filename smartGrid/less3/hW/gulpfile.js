const gulp = require('gulp')
const del = require('del') // для удал-ия старых файлов из 'build'
const concat = require('gulp-concat') // объединяет в один файл
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps') // при объединении css файлов в один, сохраняет номера строк, css
const gulpIf = require('gulp-if')
const gcmq = require('gulp-group-css-media-queries'); // объединяет медиа запросы по ширине
const browserSync = require('browser-sync').create() // автоматически обнов. страницу, при измен. в файлах


// чтобы не прописывать флажки, можно в package.json прописать в scripts укороч. запуск
let isMinify = process.argv.includes('--mini') // forRelizBuild
let isMapForCss = process.argv.includes('--map') // forDevelop

function clean() {
	return del('./build/*')
}

// при переносе в build можно улучашть качества и св-ва файлов
function html() {
	return gulp.src('./src/**/*.html') // из
		.pipe(gulp.dest('./build')) // в (dest - destination - назначение)
		.pipe(browserSync.stream())
}

function styles() {
	return gulp.src(['./src/css/normalize.css', './src/css/reset.css', './src/css/base.css', './src/css/home.css'])
		// pipe: объединение, префиксы, минификацию 
		.pipe(gulpIf(isMapForCss, sourcemaps.init()))
		.pipe(concat('main.css'))
		.pipe(autoprefixer({}))
		.pipe(gcmq())
		.pipe(gulpIf(isMinify, cleanCSS({ level: 1 })))
		.pipe(gulpIf(isMapForCss, sourcemaps.write()))
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream()) // этот код из описания функц. watch()
}

function images() {
	return gulp.src('./src/img/**/*')
		// уменьешние размера
		.pipe(gulp.dest('./build/img'))
}

function watch() {
	browserSync.init({ // чотбы работал нужно прописать .pipe в конце функции styles()
		server: {
			baseDir: './build/'
		}
	})
	gulp.watch('./src/css/**/*.css', styles)
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
