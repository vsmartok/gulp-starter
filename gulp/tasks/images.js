import webp from "gulp-webp";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

export const images = () => {
	return app.gulp.src(app.paths.images.src)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "Images",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.paths.images.dest))
		.pipe(app.plugins.if(
			app.isWebP,
			webp()
		))
		.pipe(app.plugins.if(
			app.isWebP,
			app.gulp.dest(app.paths.images.dest)
		))
		.pipe(app.plugins.if(
			app.isWebP,
			app.gulp.src(app.paths.images.src)
		))
		.pipe(app.plugins.if(
			app.isWebP,
			app.plugins.newer(app.paths.images.dest)
		))
		.pipe(imagemin([
				gifsicle({ interlaced: true }),
				mozjpeg({ quality: 75, progressive: true }),
				optipng({ optimizationLevel: 3 }),
				svgo({
					plugins: [
						{ name: "removeViewBox", active: false },
						{ name: "cleanupIDs", active: false },
						{ name: "removeMetadata", active: true },
					]
				})
			], 
            { verbose: true }
        ))
		.pipe(app.gulp.dest(app.paths.images.dest))
		.pipe(app.plugins.browserSync.stream());
}