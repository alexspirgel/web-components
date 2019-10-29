const path = require('path');
const glob = require('glob');
const fs = require('fs');

class WCAliasOverrides {
	constructor(aliasOverridesObject) {
		// Set the alias overrides object to the class instance.
		this.aliasOverridesObject = aliasOverridesObject;
	}
	apply(resolver) {
		const target = resolver.ensureHook('resolve');
		resolver.getHook('described-resolve').tapAsync('WCAliasOverrides', (request, resolveContext, callback) => {
			// For each match string in the alias overrides object.
			for (const matchString in this.aliasOverridesObject) {
				// If the match string exists in the request path.
				if (request.request.indexOf(matchString) > -1) {
					// Get the aliases for the match string.
					const aliases = this.aliasOverridesObject[matchString];
					// For each alias.
					for (const aliasIndex in aliases) {
						// Get this alias.
						const alias = aliases[aliasIndex];
						// Replace the match string with this alias.
						const newRequestString = request.request.replace(matchString, alias);
						// If the file exists.
						if (fs.existsSync(newRequestString)) {
							const obj = Object.assign({}, request, {
								request: newRequestString
							});
							return resolver.doResolve(target, obj, "aliased with mapping '" + matchString + "': '" + alias + "' to '" + newRequestString + "'", resolveContext, (error, result) => {
								if (error) {
									return callback(error);
								}
								if (result === undefined) {
									return callback(null, null);
								}
								callback(null, result);
							});
						}
					}
				}
			}
			return callback();
		});
	}
}

// Initialize the array of Webpack configuration objects.
let webpackConfigurations = [];
// Identify the location of the components directory.
const componentsDirectory = './components';
// Get the absolute path to the components directory.
const componentsDirectoryPath = path.resolve(__dirname, componentsDirectory);
// Get an array of paths to each component's package.json file.
const filePaths = glob.sync(componentsDirectoryPath + '/*/package.json');

// For each file path.
for (let filePathIndex in filePaths) {
	
	// Get this file path.
	let filePath = filePaths[filePathIndex];
	// Get this configuration object.
	let packageObject = require(filePath);
	
	// If the module is a web component.
	if (packageObject.webComponent) {

		// Get this component directory path.
		let componentDirectoryPath = path.dirname(filePath);

		// Build the Webpack configuration object.
		let webpackConfig = {
			name: packageObject.name,
			entry: path.resolve(componentDirectoryPath, packageObject.main),
			mode: 'development',
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
				filename: 'index.js',
				path: path.resolve(componentDirectoryPath, 'dist')
			},
			stats: {
				modulesSort: 'index',
				maxModules: Infinity,
				hash: false,
				version: false,
				exclude: [
					'css-loader'
				]
			},
			watch: true
		};

		// Generate an alias overrides object.
		let aliasOverridesObject = {
			'@custom': [
				componentDirectoryPath
			],
			'@component': [
				componentDirectoryPath
			]
		};

		// If a web component base is set.
		if (packageObject.webComponent.baseComponent) {
			// Get the path for the base component main script.
			let wclBaseMainPath = require.resolve(packageObject.webComponent.baseComponent, {
				paths: [componentDirectoryPath]
			});
			// Get the base component directory path.
			let wclBaseDirectoryPath = path.dirname(path.dirname(wclBaseMainPath));
			
			// Add base component paths to the alias overrides object.
			aliasOverridesObject['@base'] = [wclBaseDirectoryPath];
			aliasOverridesObject['@component'].push(wclBaseDirectoryPath);
		}

		// Set the alias overrides on the Webpack configuration object.
		webpackConfig.resolve = {
			plugins: [
				new WCAliasOverrides(aliasOverridesObject)
			]
		};

		// Add the Webpack configuration object to the array of Webpack configuration objects.
		webpackConfigurations.push(webpackConfig);

	} // End: If the module is a web component.

} // End: For each file path.

module.exports = webpackConfigurations;
