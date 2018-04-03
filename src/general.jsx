import React, { Component } from 'react';
import './general.scss';

const loadingIcon = '/assets/images/loading.png',
      logo = '/assets/images/logo-white.png',
      waifuLogo = '/assets/images/waifu.jpg';

class Header extends Component {
  render() {
    return (
      <section className="App-header">
        <div>
          <a href="/">
            <img src={logo} className="App-logo" alt="BobCo" />
          </a>
          <a href="https://waifubot.moe">
            <img src={waifuLogo} className="SubApp-logo" alt="Waifu" />
          </a>
          <a href="https://www.patreon.com/bob620"><img src="/assets/images/patreonButton.png" className="Patreon-top-button" /></a>
        </div>
        <h2 className="App-title">{this.props.title}</h2>
	      <div className="App-User" />
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
