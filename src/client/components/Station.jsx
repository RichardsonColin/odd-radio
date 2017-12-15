import React, { Component } from 'react';

class Station extends Component {

render() {
    console.log('from station!!')
  return (
    <div className="container individual-station-container">
      <div className="row station-row border">
        <div className="one-third column station-name center"> {this.props.name} </div>
        <div className="one-third column play-btn center">
          <i className="fa fa-play" aria-hidden="true"></i>
        </div>
        <div className="one-third column dot-info center">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
}
export default Station;