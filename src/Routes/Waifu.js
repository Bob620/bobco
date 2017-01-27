import Route from './Route';
import React, { Component } from 'react';
import logo from './../logo-white.png';
import './../App.css';
import { Header, BetaLoginInput, Loading } from './../General';

class Waifu extends Route {
  	constructor(props) {
	    super(props);
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
		return (
			<div className="App">
			    <Header logo={logo} title="Waifu Bot"/>
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
        <BetaLoginInput onSubmit={this.props.onSubmit} />
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

export default Waifu