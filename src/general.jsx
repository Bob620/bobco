import React, { Component } from 'react';
import './general.css';

const loadingIcon = '/assets/images/loading.png';
const logo = '/assets/images/logo-white.png';

class Header extends Component {
  render() {
    return (
      <section className="App-header">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h2 className="App-title">{this.props.title}</h2>
      </section>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button className="App-button" type={this.props.type ? this.props.type : "text"} onClick={this.props.onClick ? this.props.onClick : ""}>
        <p>{this.props.text}</p>
      </button>
    );
  }
}

class RedirectButton extends Component {
  render() {
    return (
      <a href={this.props.redirect}>
        <button className="App-button" type={this.props.type} >
          <p>{this.props.text}</p>
        </button>
      </a>
    );
  }
}

class Loading extends Component {
  render() {
    return (
      <div className="App-loading">
        <img src={loadingIcon} alt="loading" />
      </div>
    );
  }
}

export { Header, Button, Loading, RedirectButton};
