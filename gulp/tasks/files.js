export const files = () => {
	return app.gulp.src(app.paths.files.src)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "Files",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.paths.files.dest))
		.pipe(app.gulp.dest(app.paths.files.dest))
		.pipe(app.plugins.browserSync.stream());
}