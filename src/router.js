import createHistory from 'history/createBrowserHistory';

// Import Paths
import Burning from './Routes/Burning'
import Waifu from './Routes/Waifu'
import WaifuAuth from './Routes/WaifuAuth'
import Home from './Routes/Home'

class Router {
	constructor(rootElement) {
		this.rootElement = rootElement;

		/* Routes:
		 * {
		 *    path: "/PATH",
		 *    created: false,
		 *    route: ImportedClass
		 * }
		 */

		this.routes = [
			{
				path: "/waifu",
				created: false,
				route: Waifu
			},
			{
				path: "/waifu/auth",
				created: false,
				route: WaifuAuth
			},
			{
				path: "",
				created: false,
				route: Home
			},
			{
				path: "/burning",
				created: false,
				route: Burning
			}
		]

		this.history = createHistory();

		// Loads the current page
		this.getCurrentPage(this.history.location);
	}

	getCurrentPage(location) {
		console.log("New Location Rendering");
		// Parse the url query
		const urlParams = this.getUrlParams(location.search);

		// Find a route that fits the requested path
		for (let i = 0; i < this.routes.length; i++) {
			const route = this.routes[i];
			if (location.pathname === route.path || location.pathname === route.path+'/') {
				// Create the route's Object if not already made
				if (!route.created) {
					route.route = new route.route();
					route.created = true;
				}
				// Start the render process
				route.route.primaryRender(this.rootElement, this.history, this.getCurrentPage.bind(this), urlParams);
				break;
			}
		}
	}

	getUrlParams(rawQuery) {
		const splitQuery = rawQuery.slice(1).split('&');
		let paramList = {};

		for (let i = 0; i < splitQuery.length; i++) {
			let query = splitQuery[i].split('=');
			if (query[0] !== undefined && query[1] !== undefined) {
				paramList[query[0]] = query[1];
			}
		}
		return paramList;
	}
}

export default Router