const path = require('path');

console.log('test1');
console.log(require.resolve('@alexspirgel/wcl-button-hamburger',
	{paths: [path.resolve(__dirname, './components/button-hamburger')]}
));
console.log('test2');
console.log(require.resolve('@alexspirgel/wcl-button-hamburger',
	{paths: [path.resolve(__dirname, './components/button-hamburger2')]}
));

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
			alias: {
				'@component': path.resolve(__dirname, './components/button-hamburger')
			}
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
			alias: {
				'@component': path.resolve(__dirname, './components/button-hamburger2')
			}
		},
		watch: true
	}
];