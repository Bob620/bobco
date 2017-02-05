const ReactDOM = require('react-dom');
const React = require('react');
import './style.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Baka</h1>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
    <App />,
    document.getElementById('App')
  );
}, false);
