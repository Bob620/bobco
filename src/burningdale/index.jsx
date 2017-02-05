const React = require('react');
const Render = require('./../render.jsx');
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

Render(App);
