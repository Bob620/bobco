import Render from './../render.jsx';
import React, { Component } from 'react';
import { Header } from './../general.jsx';
import { Body } from './body.jsx'

class Home extends Component {
	render() {
		document.title = "BobCo";
		return (
			<div className="App">
				<Header title="BobCo"/>
				<Body />
			</div>
		);
	}
}

Render(Home);
