import React, { Component } from 'react'


//Todo componente que e baseado em classe deve ter a funcao render()
export default class ClassComponent extends Component{

	render(){
		return (
			<h1>{this.props.value}</h1>
		)
	}
}
