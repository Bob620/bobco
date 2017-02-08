import bakajax from 'bakajax';
import React, { Component } from 'react';
import { Header, Button } from './../general.jsx';
import './race.css';

class Race extends Component {
  constructor(baseUrl) {
    super();

    this.baseUrl = baseUrl;
    this.redirect = this.redirect.bind(this);
  }

  render() {
    getLifepaths(this.props.name, this.setState.bind(this));
    return (
      <section>
        <Button text={this.props.name} onClick={this.redirect.bind(null, this.props.name)}/>
      </section>
    );
  }

  redirect(url) {
    history.pushState({}, "", `/${this.baseUrl}/${url}`);
  }
}

function getLifepaths(name, setState) {
  bakajax.get(`http://localhost:3000/assets/race/${name}.json`, {})
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {

  });
}

class Setting extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

class Lifepath extends Component {
  render() {
    return (
      <div className="Lifepath">
        <div className="title">
          <h3>{this.props.name}</h3>
        </div>
        <div className="info">
          <div className="stat">
            <p>Time:</p>
            <p>{this.props.time}</p>
          </div>
          <div className="stat">
            <p>Resources:</p>
            <p>{this.props.res}</p>
          </div>
          <div className="stat">
            <p>Stats:</p>
            <p>{this.props.stat}</p>
          </div>
          <div className="stat">
            <p>Leads:</p>
            <p>{this.props.leads}</p>
          </div>
          <div className="stat">
            <p>Skills:</p>
            <p>{this.props.skills} {this.props.isGeneral ? "General" : ""}</p>
          </div>
          <div className="stat">
            <p>Traits:</p>
            <p>{this.props.traits}</p>
          </div>
          <div className="stat">
            <p>Requires:</p>
            <p>{this.props.requires}</p>
          </div>
          <div className="stat">
            <p>Restrictions:</p>
            <p>{this.props.restrictions}</p>
          </div>
        </div>
      </div>
    );
  }
}

export { Race }
