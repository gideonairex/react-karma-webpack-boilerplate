import React from 'react';

let Application = React.createClass( {

	'getInitialState' : function () {
		return {
			'name' : 'Gideon Rosales',
			'age'  : 0
		};
	},

	'componentWillMount' : function () {
		this.setState( {
			'age' : 28
		} );
	},

	'render' : function () {
		return (
			<h1> { this.state.name } : { this.state.age } </h1>
		);
	}

} );

export default Application
