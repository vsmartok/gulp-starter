export const paths = {
    html: {
		src: ["./src/html/**/*.html", "!./src/html/_*/**/*.html"],
		dest: "./build",
		watch: "./src/html/**/*.html",
	},
    clean: "./build",
    build: "./build",
    version: "./gulp/version.json",
};