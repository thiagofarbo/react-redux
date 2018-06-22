import React from 'react'
import {childrenWithProps} from '../utils/reactUtils'


export default props => (

	<div>
		<h1>Familias</h1>
		// {props.children}
		//O metodo cloneElement apenas suporta um elemento filho > <Member name='Thiago' lastName='Correa'/>
		// Caso eu coloque o codigo abaixo isso nao funcionara
		// <Member name='Thiago' lastName='Correa'/>
		// <Member name='Augusto' lastName='Correa'/>
		// { React.cloneElement(props.children, {...props})}

		//Para resolver isso utilize o codigo abaixo.
		{ childrenWithProps(props.children, props)}
	</div>
	
)