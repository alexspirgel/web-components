const path = require('path');

module.exports = {
  entry: './src/script/script.js',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'html-loader'
				}
			}
		]
	},
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, './dist')
  }
};