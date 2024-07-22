export const server = () => {
	app.plugins.browserSync({
		server: {
			baseDir: app.paths.build,
		},
		notify: false,
		port: 3000,
	});
}