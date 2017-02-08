import Render from './../render.jsx';
import React, { Component } from 'react';
import { Header, Button } from './../general.jsx';
import { Race } from './race.jsx'
//import './burningdale.css';

const baseUrl = "/burningdale";
const history = window.history;
let currentLocation = document.location;
let pathname = currentLocation.pathname.toLowerCase();

class Burningdale extends Component {
	render() {
		document.title = "Burningdale - BobCo";
		return (
			<div className="App">
				<Header title="Burningdale"/>
        <section className="App-body">
          {pathname === `${baseUrl}/human` && (
            <Race name="man"/>
          )}
        </section>
			</div>
		);
	}
}

Render(Burningdale);
