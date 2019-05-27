const path = require('path');
const fs = require('fs');

// Get component name.
let componentName = __dirname.split(path.sep).pop();

// Set default folder name.
let folderDefault = 'base';
// Set override folder name.
let folderOverride = 'custom';

/**
 * Handle scripts override.
 */

// Set scripts folder to default.
let folderScripts = folderDefault;
// If script override file exists.
if (fs.existsSync(path.resolve(__dirname, `./src/${folderOverride}/scripts/${componentName}.js`))) {
	// Set scripts folder to override.
	folderScripts = folderOverride;
}
// Set scripts file location.
let scriptsLocation = `./${folderScripts}/scripts/${componentName}.js`;

/**
 * Handle styles override.
 */

// Set styles folder to default.
let folderStyles = folderDefault;
// If style override file exists.
if (fs.existsSync(path.resolve(__dirname, `./src/${folderOverride}/styles/${componentName}.scss`))) {
	// Set styles folder to override.
	folderStyles = folderOverride;
}
// Set styles file location.
let stylesLocation = `../../${folderStyles}/styles/${componentName}.scss`;

/**
 * Handle templates override.
 */

// Set templates folder to default.
let folderTemplates = folderDefault;
// If template override file exists.
if (fs.existsSync(path.resolve(__dirname, `./src/${folderOverride}/templates/${componentName}.html`))) {
	// Set templates folder to override.
	folderTemplates = folderOverride;
}
// Set templates file location.
let templatesLocation = `../../${folderTemplates}/templates/${componentName}.html`;

/**
 * Webpack configuration.
 */

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
			'@scripts': scriptsLocation,
			'@styles': stylesLocation,
			'@templates': templatesLocation,
		}
	},
	watch: true
};