const path = require('path');
const fs = require('fs');

// Get component name.
let componentName = __dirname.split(path.sep).pop();

// Choose which supplied path to compile
const getPath = (paths) => {
	for (let path = paths.length - 1; path >= 0; path--) {
		if (fs.existsSync(paths[path])) {
			return paths[path];
		}
	}
};

// Set script path.
const scriptPath = getPath(
	[
		path.resolve(__dirname, `./src/base/scripts/${componentName}.js`),
		path.resolve(__dirname, `./src/custom/scripts/${componentName}.js`)
	]
);

// Set style path.
const stylePath = getPath(
	[
		path.resolve(__dirname, `./src/base/styles/${componentName}.scss`),
		path.resolve(__dirname, `./src/custom/styles/${componentName}.scss`)
	]
);

// Set template path.
const templatePath = getPath(
	[
		path.resolve(__dirname, `./src/base/templates/${componentName}.html`),
		path.resolve(__dirname, `./src/custom/templates/${componentName}.html`)
	]
);

// Webpack configuration.
module.exports = {
	entry: './src/' + componentName + '.js',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					'html-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	output: {
		filename: componentName + '.js',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		alias: {
			'@script': scriptPath,
			'@style': stylePath,
			'@template': templatePath,
		}
	},
	watch: true
};