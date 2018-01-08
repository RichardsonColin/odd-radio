import React, { Component } from 'react';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Team from './Team.jsx';

class Masthead extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: 'none'
    }
  }

  toggleInfo(target) {
    if (this.state.expanded === target) {
      this.setState({
        expanded: 'none'
      })
    }
    if (this.state.expanded !== target) {
      this.setState({
        expanded: target
      });
    }
  }


  render(){
    return(
      <div className="container masthead">
        <div className="row border masthead-nav">
          <div className="one-third column center" onClick={ (e) => this.toggleInfo('about') }>
            <h5>About</h5>
          </div>
          <div className="one-third column center" onClick={ (e) => this.toggleInfo('contact') }>
            <h5>Contact</h5>
          </div>
          <div className="one-third column center" onClick={ (e) => this.toggleInfo('team') }>
            <h5>Team</h5>
          </div>
        </div>
        <div className="row border">
          <div className="column">
            { this.state.expanded === 'about' && <About /> }
            { this.state.expanded === 'contact' && <Contact /> }
            { this.state.expanded === 'team' && <Team /> }
          </div>
        </div>
      </div>
    );
  }
}

export default Masthead;