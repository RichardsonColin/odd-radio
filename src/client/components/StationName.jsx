import React, {Component} from 'react';

class StationName extends Component {
  render(){


    return(

        <div className="player-station-name"> { this.props.StationFeed } </div>

      );
  }
}
export default StationName;