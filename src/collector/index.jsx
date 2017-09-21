import Render from './../render.jsx';
import React, { Component } from 'react';
import { Header, Loading, RedirectButton } from './../general.jsx';
import axios from 'axios';
import './collector.css';

class Collection extends Component {
  constructor(props) {
	   super(props);

     this.state = {
       user: false
     }
  }

  componentDidMount() {
    axios.get('/waifu/api/users/@me')
    .then((res) => {
      this.setState({user: res.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

	render() {
		document.title = "Waifu Bot";
		return (
			<div className="App">
			  <Header title="Waifu Collector"  user={this.state.user} />
		    <Dashboard />
			</div>
		);
	}
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-body">
      </div>
    );
  }
}

Render(Collection);
