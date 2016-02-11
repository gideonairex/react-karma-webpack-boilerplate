import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Component from '../public/app/component';

describe( 'test', () => {

	let component;

	before( function () {
		component = TestUtils.renderIntoDocument( <Component /> );
	} );

	it( 'should equal to state', () => {
		expect( component.state.name ).to.equal( 'Gideon Rosales' );
		expect( component.state.age ).to.equal( 28 );
	} );

} );
