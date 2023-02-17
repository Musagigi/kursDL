const gulp = require('gulp')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del') // для удал-ия старых файлов из 'build'

function clean() {
	return del('./build/*')
}

// при переносе в build можно улучашть качества и св-ва файлов
function html() {
	return gulp.src('./src/**/*.html') // из
		.pipe(gulp.dest('./build')) // в (dest - destination - назначение)
}

function styles() {
	return gulp.src(['./src/css/styles.css', './src/css/flow.css'])
		// pipe: объединение, префиксы, минификацию 
		.pipe(sourcemaps.init())
		.pipe(concat('main.css'))
		.pipe(autoprefixer({}))
		.pipe(cleanCSS({ level: 1 }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css'))
}

function images() {
	return gulp.src('./src/img/**/*')
		// уменьешние размера
		.pipe(gulp.dest('./build/img'))
}

function watch() {
	gulp.watch('./src/css/**/*.css', styles)
}

// gulp.series - выполняет таски по очереди (завершится один, перейдет к другому)
// gulp.parallel - выполняет одновременно (нач. и заверш. в любой последовательности)
// чтобы не писать таски по Одному
let build = gulp.parallel(html, styles, images)
let buildWithClean = gulp.series(clean, build) // сначала очищаем build, потом переносим файлы
let dev = gulp.series(buildWithClean, watch)

gulp.task('build', buildWithClean)
gulp.task('dev', dev)

// gulp.task('html', html)
// gulp.task('styles', styles)
// gulp.task('images', images)

