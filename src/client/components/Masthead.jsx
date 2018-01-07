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
          <div className="row border">
            <div className="column">
              <div className="container">
                <p>oddrad.io presents a curated collection of campus and community radio stations 
                  from across Canada. Each station here is an independent, volunteer-driven organization 
                  that focuses on supporting its local community.</p>
                <p>oddrad.io collects these stations web streams in a single location so that you can listen and experience the sounds of different cities across the country.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Masthead;