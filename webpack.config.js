var path = require('path');

module.exports = {
	entry: ['./src/index.js', './src/auth/index.js'],
	output:{
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			}
		]
	},
	babel:{
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}
}