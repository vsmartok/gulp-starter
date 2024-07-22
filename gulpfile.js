import gulp from "gulp";

import { paths } from "./gulp/paths.js";
import { plugins } from "./gulp/plugins.js";

global.app = {
    gulp,
    paths,
    plugins,
};

import { reset } from "./gulp/tasks/reset.js";

const build = gulp.series(
    reset
);

export {
    build
}