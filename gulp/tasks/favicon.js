export const favicon = () => {
    return app.gulp.src(app.paths.favicon.src)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "Favicon",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.paths.favicon.dest))
		.pipe(app.gulp.dest(app.paths.favicon.dest))
		.pipe(app.plugins.browserSync.stream());
};