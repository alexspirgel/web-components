const path = require('path');
const fs = require('fs');

// Get src folder path.
let srcPath = path.resolve(__dirname, './src');
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
		`${srcPath}/base/scripts/${componentName}.js`,
		`${srcPath}/custom/scripts/${componentName}.js`
	]
);

// Set style path.
const stylePath = getPath(
	[
		`${srcPath}/base/styles/${componentName}.scss`,
		`${srcPath}/custom/styles/${componentName}.scss`
	]
);

// Set template path.
const templatePath = getPath(
	[
		`${srcPath}/base/templates/${componentName}.html`,
		`${srcPath}/custom/templates/${componentName}.html`
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
			'@src': srcPath,
			'@script': scriptPath,
			'@style': stylePath,
			'@template': templatePath,
		}
	},
	watch: true
};