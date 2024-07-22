import gulp from "gulp";

import { paths } from "./gulp/paths.js";
import { plugins } from "./gulp/plugins.js";

global.app = {
    isDev: !process.argv.includes("--build"),
	isWebP: !process.argv.includes("--nowebp"),
    gulp,
    paths,
    plugins,
};

import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { html } from "./gulp/tasks/html.js";
import { css } from "./gulp/tasks/css.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { images } from "./gulp/tasks/images.js";
import { files } from "./gulp/tasks/files.js";
import { sprite } from "./gulp/tasks/sprite.js";
import { favicon } from "./gulp/tasks/favicon.js";
import { scripts } from "./gulp/tasks/scripts.js";

const build = gulp.series(
    reset,
    gulp.parallel(html, css, fonts, images, files, sprite, favicon, scripts)
);

const dev = gulp.series(
    build,
    gulp.parallel(server)
);

export {
    build,
    dev
}