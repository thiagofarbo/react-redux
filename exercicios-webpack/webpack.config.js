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
	},
	module:{
		//carrega os arquivos
		loaders: [{
			test:/.js?$/,
			loader: 'babel-loader',
			exclude:/node_modules/,
			query:{
				presets:['es2015'],
				plugins:['transform-object-rest-spread']
			}
		}]
	}
}
