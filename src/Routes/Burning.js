import Route from './Route';
import React from 'react';

class Burning extends Route {
	render() {
		document.title = "Burning Normandale";
		return (
			<div>
				<h2>Burning</h2>
			</div>
		);
	}
}

export default Burning