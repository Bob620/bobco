const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./index.jsx');

//Target container is not a DOM element error may occur, should render on DOMContentLoaded event.
document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
    <App />,
    document.getElementById('App')
  );
}, false);
