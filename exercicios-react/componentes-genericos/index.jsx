import React from 'react'
import ReactDOM from 'react-dom'
import GenericFamily from './genericFamily'
import Member from './member'


ReactDOM.render(
	<GenericFamily lastName='Correa'>
		<Member name='Thiago' />
		<Member name='Augusto' />
	</GenericFamily>	
,document.getElementById('app'))