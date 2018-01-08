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
    <div>
      <div className="container masthead">
        <div className="row station-row border">
          <div className="one-third column center" onClick={ (e) => this.toggleInfo('about') } >
            About
          </div>
          <div className="one-third column center" onClick={ (e) => this.toggleInfo('contact') }>
            Contact
          </div>
          <div className="one-third column center" onClick={(e) => this.toggleInfo('team')} >
            Team
          </div>
        </div>
        <div className="row border">
          <div className="column">
            <About />
            <Contact />
            <Team />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Masthead;