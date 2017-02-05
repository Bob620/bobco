import Render from './../render.jsx';
import React, { Component } from 'react';
import { Header } from './../general.jsx';

class Burningdale extends Component {
	render() {
		document.title = "Burningdale - BobCo";
		return (
			<div className="App">
				<Header title="Burningdale"/>
			</div>
		);
	}
}

Render(Burningdale);
