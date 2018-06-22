import React, { Component } from 'react'


//Todo componente que e baseado em classe deve ter a funcao render()
export default class ClassComponent extends Component{

	constructor(props){
		super(props)
		//Estado do componente, todo componente tem um.
		this.state = {value: props.initialValue}
	}

	sum(valor){
		this.setState({value: this.state.value + valor})
	}

	render(){
		// this.props.value++
		return (
			<div>
				<h1>{this.props.value}</h1>
				<h2>{this.state.value}</h2>
				<button onClick={() => this.sum(1)}>Incrementar</button>
				<button onClick={() => this.sum(-1)}>Decrementar</button>
			</div>
		)
	}
}