//Referencia para meu modulo
//const logger = require('./logger.js')
//logger.info('Utilizando padrão commonJS!!!')

// import Pessoa from './pessoa'
// const pessoa = new Pessoa('Thiago Emidio')
// console.log(pessoa.toString())


const produto = {
	nome: 'Caneta Bic Preta'
	preco: 1.90,
	desconto:0.05
}

function clone(objeto){
	return { ...objeto }
}

const novoProduto = 'Caneta Bic Azul'

console.log(produto, novoProduto)