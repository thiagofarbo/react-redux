import React from 'react'
import ReactDOM from 'react-dom'
// import Component from './component'
// import {Primeiro, Segundo} from './component'

//Componente sem parametro
// ReactDOM.render(<Component/>, document.getElementById('app'))


//Componente com parametro
// ReactDOM.render(<Component value='Show!'/>, document.getElementById('app'))

ReactDOM.render(
	<div>
		<Primeiro/>
		<Segundo/>
	</div>
,document.getElementById('app'))