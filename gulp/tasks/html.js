import fileInclude from "gulp-file-include";
import htmlBeautify from "gulp-html-beautify";
import versionNumber from "gulp-version-number";

export const html = () => {
	return app.gulp.src(app.paths.html.src)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(fileInclude())
		.pipe(app.plugins.if(
			app.isDev,
			versionNumber({
				value: "%TS%",
				append: {
					key: "_v",
					cover: 0,
					to: ["css", "js", "image"],
				},
				output: {
					file: app.paths.version,
				}
			})
		))
		.pipe(app.plugins.replace("@root/", "/"))
		.pipe(app.plugins.replace("@css/", "/css/"))
		.pipe(app.plugins.replace("@img/", "/img/"))
		.pipe(app.plugins.replace("@js/", "/js/"))
		.pipe(htmlBeautify({ indentSize: 2 }))
		.pipe(app.gulp.dest(app.paths.html.dest))
		.pipe(app.plugins.browserSync.stream());
}