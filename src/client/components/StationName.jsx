import React, {Component} from 'react';

class StationName extends Component {

  render(){


    return(

        <div className={this.props.Style} onClick={(e) => this.props.findStationExpandInfo(this.props.StationName, this.props.StationFeed)}> { this.props.StationFeed } {this.props.StationName}</div>

      );
  }
}


export default StationName;