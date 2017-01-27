import React, { Component } from 'react';
import loadingIcon from './loading.png';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <a href="/">
          <img src={this.props.logo} className="App-logo" alt="logo" />
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
        <p>{this.props.name}</p>
      </button>
    );
  }
}

class BetaLoginInput extends Component {
  render() {
    return (
      <form className="App-betalogininput" onSubmit={this.props.onSubmit}>
        <input autoComplete="off" autoFocus maxLength="10" type="text" placeholder="Beta Access Code" />
        <br />
        <Button name="Login" type="submit" />
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

export { Header, Button, BetaLoginInput, Loading};