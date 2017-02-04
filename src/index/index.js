const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../../components/index.jsx');

//Target container is not a DOM element error may occur, should render on DOMContentLoaded event.
const ready = function(){
	const main = document.getElementById('App');
	ReactDOM.render(React.createElement(App), main);
}

document.addEventListener("DOMContentLoaded", ready, false)


