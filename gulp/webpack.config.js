import * as nodePath from "path";

const srcPath = nodePath.resolve("src");

const webpackConfig = (isDev) => {
	return {
		mode: isDev ? "development" : "production",
		entry: {
			main: `${srcPath}/js/main.js`,
		},
		output: {
			filename: "[name].js",
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: [
								[
									"@babel/preset-env",
									{
										targets: "defaults",
									}
								]
							]
						}
					}
				}
			]
		},
	}
};

export default webpackConfig;