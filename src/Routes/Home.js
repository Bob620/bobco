import Route from './Route';
import React from 'react';
import './../App.css';
import { Header } from './../General';

class Home extends Route {
	render() {
		document.title = "BobCo";
		return (
			<div className="App">
				<Header title="BobCo"/>
			</div>
		);
	}
}

export default Home