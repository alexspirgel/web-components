const path = require('path');
const glob = require('glob');
const fs = require('fs');

class MultipleAliasPaths {
	constructor(aliasObject) {
		this.aliasObject = aliasObject;
	}

	apply(resolver) {
		const target = resolver.ensureHook('resolve');
		resolver.getHook('described-resolve').tapAsync('MultipleAliasPaths', (request, resolveContext, callback) => {
			for (const alias in this.aliasObject) {
				const thisAlias = this.aliasObject[alias];
				if (request.request.indexOf(alias) > -1) {
					for (const path in thisAlias) {
						const thisPath = thisAlias[path];
						const newRequestStr = request.request.replace(alias, thisPath);
						console.log(newRequestStr);
						if (fs.existsSync(newRequestStr)) {
							console.log('^ FOUND');
							const obj = Object.assign({}, request, {
								request: newRequestStr
							});
							return resolver.doResolve(target, obj, "aliased with mapping '" + alias + "': '" + thisPath + "' to '" + newRequestStr + "'", resolveContext, (err, result) => {
								if(err) return callback(err);
								if(result === undefined) return callback(null, null);
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

// For each component with a `package.json` file.
glob('./components/*/package.json' , {}, (error, componentConfigPaths) => {
	// For each component config path.
	for (let configPath in componentConfigPaths) {
		// Get this component config path.
		let componentConfigPath = componentConfigPaths[configPath];
		// Get this component config object.
		let componentConfig = require(componentConfigPath);
		
		//
		let componentAliases = [];

		// Get this component directory path.
		let componentDirectoryPath = path.resolve(__dirname, path.dirname(componentConfigPath).split(path.sep).pop());
		//
		componentAliases.push(componentDirectoryPath);

		// If a WCL base is set.
		if (componentConfig.wclBase) {
			// Get the path for the resolved WCL base dependency main script.
			let wclBaseMainPath = require.resolve(componentConfig.wclBase, {
				paths: [componentDirectoryPath]
			});
			// Normalize the path separator.
			let wclBaseNormalizedPath = componentConfig.wclBase.replace('/', path.sep);
			// Get the base module directory index within the resolved module,
			let wclBaseDirectoryPathIndex = wclBaseMainPath.indexOf(wclBaseNormalizedPath);
			// Trim the path to the base module directory.
			let wclBaseDirectoryPath = wclBaseMainPath.slice(0, (wclBaseDirectoryPathIndex + wclBaseNormalizedPath.length));
			//
			componentAliases.push(wclBaseDirectoryPath);
		}

		console.log('componentConfig:');
		console.log(componentConfig);

		console.log('componentAliases:');
		console.log(componentAliases);
	}
		console.log('========================================');
});

// Webpack configuration.
module.exports = [
	{
		name: 'button-hamburger',
		entry: './components/button-hamburger/src/index.js',
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
			path: path.resolve(__dirname, './components/button-hamburger/dist')
		},
		resolve: {
			plugins: [
				new MultipleAliasPaths(
					{
						'@component': [
							path.resolve(__dirname, './components/button-hamburger'),
							path.resolve(__dirname, './node_modules/@alexspirgel/wcl-button-hamburger')
						]
					}
				)
			]
		},
		watch: true
	},
	{
		name: 'button-hamburger2',
		entry: './components/button-hamburger2/src/index.js',
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
			path: path.resolve(__dirname, './components/button-hamburger2/dist')
		},
		resolve: {
			plugins: [
				new MultipleAliasPaths(
					{
						'@component': [
							path.resolve(__dirname, './components/button-hamburger2'),
							path.resolve(__dirname, './components/button-hamburger2/node_modules/@alexspirgel/wcl-button-hamburger'),
						]
					}
				)
			]
		},
		watch: true
	}
];