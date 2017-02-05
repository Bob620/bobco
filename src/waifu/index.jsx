import Render from './../render.jsx';
import React, { Component } from 'react';
import { Header, Loading, RedirectButton } from './../general.jsx';

class Waifu extends Component {
  	constructor() {
	    super();
	    this.validateCode = this.validateCode.bind(this);
	    this.state = {
	    	isLoggedIn: false,
	    	loading: false,
	    	loginFailed: false,
	    	user: {
	    	    "name": ""
	    	}
	    }
	}

	render() {
		document.title = "Waifu Bot - BobCo";
		return (
			<div className="App">
			    <Header title="Waifu Bot"/>
			    {this.state.isLoggedIn ? (
				    <Dashboard user={this.state.user} />
		    	) : (
		        	<LoginHome failed={this.state.loginFailed} onSubmit={this.validateCode} />
		    	)}
			    {this.state.loading &&
			    	<Loading />
			    }
			</div>
		);
	}

	validateCode(e) {
	    this.setState({
	    	loading: true
	    });
	    const value = e.target[0].value;
	    setTimeout(() => {
	    	if (value === "123456") {
	    	    this.setState({
		    	    isLoggedIn: true,
		    	    loading: false,
		    	    loginFailed: false,
		    	    user: {
		     	       name: "Bob620"
		        	}
	        	});
	      	} else {
	        	this.setState({
		        	isLoggedIn: false,
		        	loading: false,
		        	loginFailed: true,
		        	user: {
		        	    name: "Bob620"
		        	}
	        	});
	    	}
	    }, 2000);
    e.preventDefault();
  }
}

class LoginHome extends Component {
  render() {
    return (
      <div className="App-body">
        <p className="App-intro">
          A Discord chatbot with a number of features and more to come.
        </p>
        {this.props.failed &&
          <p className="App-fail">
            Failed to login using that code
          </p>
        }
        <RedirectButton text="Login Using Discord" redirect="https://discordapp.com/oauth2/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000/waifu/auth&scope=identify guilds&client_id=259932651417370624" />
      </div>
    );
  }
}

class Dashboard extends Component {
  render() {
    return (
      <div className="App-body">
        <p>
          Welcome {this.props.user.name}
        </p>
      </div>
    );
  }
}

Render(Waifu);
