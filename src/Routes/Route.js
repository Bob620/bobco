import ReactDOM from 'react-dom';

class Route {
	constructor() {
		// Predefined variables
		this.rootElement = undefined;
		this.state = {};
		this.urlParams = {};
		this.history = undefined;
		this.DOM = "<div />"
	}

	setState(state) {
		// Actually make setState work correctly
		this.state = state;
		// Rerender the DOM
		this.rerender(this.render(this.urlParams));
	}

	rerender(DOM) {
		// Renders the DOM using React's rendering
		if (DOM) {
			ReactDOM.render(
				DOM,
				this.rootElement
			);
		}
	}

	redirect(location) {
		// Unlisten and send the location to the router
		this.unlisten();
		this.reroute(location);
	}

	primaryRender(rootElement, history, reroute, urlParams) {
		// Set rootElement to render the page at
		this.rootElement = rootElement;
		// Set the urlParams (Constant, reloads page if they are changed from code on this page or manually)
		this.urlParams = urlParams;
		// Provides access to the history context to run .push, .go, etc
		this.history = history;
		// Allows this.redirect to have a location to push the redirection call
		this.reroute = reroute;
		// Listens for .push .go, etc from history. Can't have 1 universal in router.js, can't hear.
		this.unlisten = history.listen(this.redirect.bind(this));
		// Render
		this.rerender(this.render(urlParams));
	}
}

export default Route