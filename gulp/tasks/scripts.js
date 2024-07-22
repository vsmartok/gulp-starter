import webpack from "webpack-stream";
import webpakConfig from "../webpack.config.js";

export const scripts = () => {
	return app.gulp.src(app.paths.scripts.src)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>",
			})
		))
		.pipe(webpack({
			config: webpakConfig(app.isDev),
		}))
		.pipe(app.gulp.dest(app.paths.scripts.dest))
		.pipe(app.plugins.browserSync.stream());
}