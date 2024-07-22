export const paths = {
    html: {
		src: ["./src/html/**/*.html", "!./src/html/_*/**/*.html"],
		dest: "./build",
		watch: "./src/html/**/*.html",
	},
    css: {
		src: "./src/css/**/*.{sass,scss,css}",
		dest: "./build/css",
		watch: "./src/css/**/*.{sass,scss,css}",
	},
    fonts: {
        src: "./src/fonts/**/*.ttf",
        dest: "./build/fonts",
        watch: "./src/fonts/**/*.ttf",
    },
    images: { 
        src: "./src/img/**/*.{jpg,jpeg,png,gif,svg,webp}",
        dest: "./build/img",
        watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,webp}",
    },
    files: {
        src: "./src/files/**/*",
        dest: "./build/files",
        watch: "./src/files/**/*",
    },
    sprite: {
        src: "./src/sprite/**/*.svg",
        dest: "./build/img/icons",
        watch: "./src/sprite/**/*.svg",
    },
    favicon: {
        src: "./src/favicon/*.ico",
        dest: "./build/img/favicon",
        watch: "./src/favicon/*.ico"
    },
    scripts: {
        src: "./src/js/*.js",
        dest: "./build/js",
        watch: "./src/js/**/*.js",
    },
    clean: "./build",
    build: "./build",
    version: "./gulp/version.json",
};