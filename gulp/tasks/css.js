import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sassCompiler = gulpSass(dartSass);

export const css = () => {
	return app.gulp.src(app.paths.css.src)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "CSS",
				message: "Error: <%= error.message %>",
			})
		))
		.pipe(app.plugins.if(
			app.isDev,
			app.plugins.sourcemaps.init({ largeFile: true })
		))
		.pipe(sassCompiler({ outputStyle: "expanded"}, true))
		.pipe(app.plugins.if(
			!app.isDev,
			groupCssMediaQueries()
		))
		.pipe(app.plugins.if(
			!app.isDev,
			autoprefixer({
				cascade: true,
				grid: true,
				overrideBrowserslist: ["last 3 versions"],
			})
		))
		.pipe(app.plugins.if(
			!app.isDev,
			cleanCss()
		))
		.pipe(app.plugins.if(
			app.isDev,
			app.plugins.sourcemaps.write(".")
		))
		.pipe(app.gulp.dest(app.paths.css.dest))
		.pipe(app.plugins.browserSync.stream());
}