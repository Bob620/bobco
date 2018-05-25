import Render from './../render.jsx';
import React, { Component } from 'react';
import { Header } from './../general.jsx';

class Home extends Component {
	render() {
		document.title = "BobCo";
		return (
			<div className="App">
				<Header title="BobCo"/>
				<div id="App-nav-profile">
					<div className="nav-profile-image">
						<img src="./assets/images/waifu.jpg" />
					</div>
					<div className="nav-profile-logout">
						<i className="fas fa-sign-out-alt" />
					</div>
					<div className="nav-profile-name">
						<p>Bob620#5555</p>
					</div>
				</div>
				<div id="App-side-nav">

				</div>
			</div>
		);
	}
}

Render(Home);
