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
    clean: "./build",
    build: "./build",
    version: "./gulp/version.json",
};