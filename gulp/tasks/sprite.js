import svgSprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";

export const sprite = () => {
	return app.gulp.src(app.paths.sprite.src)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "Sprite",
				message: "Error: <%= error.message %>",
			})
		))
		.pipe(svgSprite({
			mode: {
				symbol: {
					dest: "",
					sprite: "sprite.svg",
				},
			},
			shape: {
				id: {
					separator: "",
					generator: "",
				}
			},
			svg: {
				rootAttributes: {
					"style": "display: none",
					"aria-hidden": "true",
				}
			}
		}))
		.pipe(cheerio({
			run: function ($, file) {
				$("[fill]").removeAttr("fill");
				$("[stroke]").removeAttr("stroke");
				$("[style]").removeAttr("style");
			},
			parserOptions: {
				xmlMode: true,
			}
		}))
		.pipe(app.gulp.dest(app.paths.sprite.dest))
		.pipe(app.plugins.browserSync.stream());
}