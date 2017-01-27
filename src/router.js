import createHistory from 'history/createBrowserHistory';
import Burning from './Routes/Burning'
import Waifu from './Routes/Waifu'
import WaifuAuth from './Routes/WaifuAuth'
import Home from './Routes/Home'

class Router {
	constructor(rootElement) {
		this.rootElement = rootElement;

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

		this.getCurrentPage(this.history.location);

		this.history.listen((location, action) => {
			this.getCurrentPage(location);
		});
	}

	getCurrentPage(location) {
		const urlParams = this.getUrlParams(location.search);

		for (let i = 0; i < this.routes.length; i++) {
			const route = this.routes[i];
			if (location.pathname === route.path || location.pathname === route.path+'/') {
				if (!route.created) {
					route.route = new route.route();
					route.created = true;
				}
				route.route.primaryRender(this.rootElement, urlParams);
				break;
			}
		}
	}

	getUrlParams(rawQuery) {
		const splitQuery = rawQuery.slice(1).split('&');
		let paramList = [];

		for (let i = 0; i < splitQuery.length; i++) {
			let query = splitQuery[i].split('=');
			if (query[0] !== undefined && query[1] !== undefined) {
				paramList.push({
					name: query[0],
					data: query[1]
				});
			}
		}
	}
}

export default Router