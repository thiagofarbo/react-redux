import React from 'react'

//Arrow Function sem parametros
// export default () => (

// 	<h1>Primeiro Component</h1>
// )

//Arrow Function com parametro
export default (props) => (

	<h1>{props.value}</h1>
)

const Primeiro = props =>(

		<h1>Primeiro Component!</h1>
)

const Segundo = props => <h1>Segundo Component!</h1>

// Exportanto meus componentes para ser utilizados 
// em outros arquivos.
export {Primeiro, Segundo}


// Outra maneira de exportar um component e fazendo
// export const Segundo = props => <h1>Segundo Component!</h1>

//OBS: vc pode colocar varios componetes dentro de um arquivo.
// mas muitas pessoas criam um component por arquivo.
