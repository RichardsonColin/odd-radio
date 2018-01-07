import React, { Component } from 'react';

class Masthead extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div>
        <div className="container masthead">
          <div className="row station-row border">
            <div className="one-third column center ">
              About
            </div>
            <div className="one-third column center">
              Contact
            </div>
            <div className="one-third column center">
              Team
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Masthead;