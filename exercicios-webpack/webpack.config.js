const webapck = require('webpack')

//Plugin para extrair textos e ler os arquivos .CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
	plugins:[
		//O plugin vai gerar o arquivo app.css no processamento
		new ExtractTextPlugin('app.css')
	],
	module:{
		loaders: [{
			test:/.js?$/,
			loader: 'babel-loader',
			exclude:/node_modules/,
			query:{
				presets:['es2015', 'react'],
				plugins:['transform-object-rest-spread']
			}
		},{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")	
		}]
	}
}
