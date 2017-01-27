import ReactDOM from 'react-dom';

class Route {
	constructor() {
		this.rootElement = undefined;
		this.state = {};
		this.DOM = "<div />"
	}

	setState(state) {
		// Actually make setState work correctly
		this.state = state;
		this.rerender(this.render());
	}

	rerender(DOM) {
		ReactDOM.render(
			DOM,
			this.rootElement
		);
	}

	primaryRender(rootElement, urlParams) {
		this.rootElement = rootElement;
		this.rerender(this.render());
	}
}

export default Route