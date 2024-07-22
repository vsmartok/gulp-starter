import gulp from "gulp";

import { paths } from "./gulp/paths.js";
import { plugins } from "./gulp/plugins.js";

global.app = {
    gulp,
    paths,
    plugins,
};

import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { html } from "./gulp/tasks/html.js";
import { css } from "./gulp/tasks/css.js";
import { fonts } from "./gulp/tasks/fonts.js";

const build = gulp.series(
    reset,
    gulp.parallel(html, css, fonts)
);

const dev = gulp.series(
    build,
    gulp.parallel(server)
);

export {
    build,
    dev
}