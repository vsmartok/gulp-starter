import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

export const fonts = () => {
	return app.gulp.src(app.paths.fonts.src)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "Fonts",
				message: "Error: <%= error.message %>",
			})
		))
		.pipe(ttf2woff())
		.pipe(app.gulp.dest(app.paths.fonts.dest))
		.pipe(app.gulp.src(app.paths.fonts.src))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.paths.fonts.dest))
		.pipe(app.plugins.browserSync.stream());
}