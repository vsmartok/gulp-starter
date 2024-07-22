import ifPlugin from "gulp-if";
import notify from "gulp-notify";
import plumber from "gulp-plumber";
import replace from "gulp-replace";
import sourcemaps from "gulp-sourcemaps";
import browserSync from "browser-sync";

export const plugins = {
    if: ifPlugin,
	notify,
	plumber,
	replace,
	sourcemaps,
    browserSync,
};