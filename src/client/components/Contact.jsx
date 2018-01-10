import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div className="container masthead-info">
        <div className="row center">
          <h4>Contact Us</h4>
        </div>
        <div className="row">
          <p>Got a suggestion for a station to add?</p>
          <p>Want us to take your station down?</p>
          <p>Get in touch with us by email: oddradioapp@gmail.com</p>
          <p>This is an open source project and we welcome additional contributions from the community.</p>
          <a href="https://github.com/johnniereg/odd-radio" target="blank" ><p>The code.</p></a>
        </div>
      </div>
    )
  }

}

export default Contact;