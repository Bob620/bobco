import Render from './../render.jsx';
import React, { Component } from 'react';
import { Header } from './../general.jsx';

class Home extends Component {
	render() {
		document.title = "BobCo";
		return (
			<div className="App">
				<Header title="BobCo"/>
			</div>
		);
	}
}

Render(Home);
