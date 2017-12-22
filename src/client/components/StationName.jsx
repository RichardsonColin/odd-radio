import React, {Component} from 'react';

class StationName extends Component {

  render(){


    return(
      <div>
        <p className={this.props.Style} onClick={(e) => this.props.findStationExpandInfo(this.props.StationName, this.props.StationFeed)}> { this.props.StationFeed } {this.props.StationName}</p>
      </div>
      );
  }
}


export default StationName;