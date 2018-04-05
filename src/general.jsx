import React, { Component } from 'react';
import './general.scss';

const loadingIcon = '/assets/images/loading.png',
      logo = '/assets/images/logo-white.png',
      waifuLogo = '/assets/images/waifu.jpg';

class Header extends Component {
  render() {
    return (
      <section id="App-top-nav">
	      <div className="App-logos">
		      <a href="/" >
			      <img src={logo} alt="BobCo" />
		      </a>
		      <a href="https://waifubot.moe">
			      <img src={waifuLogo} alt="Waifu" />
		      </a>
	      </div>
        <h2 className="App-title">{this.props.title}</h2>
	      <div className="App-User" />
      </section>
    );
  }
}

// <a href="https://www.patreon.com/bob620"><img src="/assets/images/patreonButton.png" className="Patreon-top-button" /></a>

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
