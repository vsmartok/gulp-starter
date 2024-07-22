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

const build = gulp.series(
    reset
);

const dev = gulp.series(
    build,
    gulp.parallel(server)
);

export {
    build,
    dev
}