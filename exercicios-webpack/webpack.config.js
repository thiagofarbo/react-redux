const webapck = require('webpack')

module.exports = {
	entry: './ex/index.js',
	output: {
		path: __dirname + '/public',
		filename: './bundle.js'
	},
	devServer:{
		port: 8083,
		contentBase: './public'
	}
}
