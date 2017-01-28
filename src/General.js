import React, { Component } from 'react';
import loadingIcon from './loading.png';
import logo from './logo-white.png';
import './General.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h2 className="App-title">{this.props.title}</h2>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button className="App-button" type={this.props.type} >
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

class BetaLoginInput extends Component {
  render() {
    return (
      <form className="App-betalogininput" onSubmit={this.props.onSubmit}>
        <input autoComplete="off" autoFocus maxLength="10" type="text" placeholder="Beta Access Code" />
        <br />
        <Button text="Login" type="submit" />
      </form>
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

export { Header, Button, BetaLoginInput, Loading, RedirectButton};