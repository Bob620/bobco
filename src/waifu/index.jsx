import Render from './../render.jsx';
import React, { Component } from 'react';
import { Header, Loading, RedirectButton } from './../general.jsx';
import './waifu.css';

class Waifu extends Component {
  constructor() {
	   super();
  }

	render() {
		document.title = "Waifu Bot";
		return (
			<div className="App">
			  <Header title="Waifu Bot"/>
		    <LoginHome />
			</div>
		);
	}
}

class LoginHome extends Component {
  render() {
    return (
      <div className="App-body">
        <div>
          <img src="/assets/images/waifu.jpg" />
          <p className="App-intro">
            An easy to use Chatbot based around anime pictures
          </p>
          <RedirectButton text="Login Using Discord" redirect="https://discordapp.com/oauth2/authorize?response_type=code&redirect_uri=http%3A%2F%2Fbobco.moe/waifu/api/auth&scope=identify guilds&client_id=259932651417370624" />
        </div>
      </div>
    );
  }
}

Render(Waifu);
