import Route from './Route';
// eslint-disable-next-line
import React from 'react';
import './../App.css';;
// eslint-disable-next-line
import { Loading } from './../General';

class WaifuAuth extends Route {
	render(urlParams) {
		document.title = "Waifu Bot";

		console.log(`Send the code: ${urlParams.code}, to BobBot to get Authenticated and a token and stuff, then cross-refrence with the guild info it has on hand and send the data needed to render the next page.`);

		this.history.push('/waifu')

		return false;
	}
}

export default WaifuAuth