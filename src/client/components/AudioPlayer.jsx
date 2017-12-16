import React, {Component} from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStationName: '',
      stream: '',
      streamType: ''
    }
  }

  render() {
    return (
      <div>
        <div className="player-station-name"> Current Station: { this.props.stationFeed.name } </div>
        <audio id="player" controls="controls" >
          <source src={ this.props.stationFeed.stream } type={ this.props.stationFeed.type } />
        </audio>
        <div className="seek-button" onClick={ this.props.seekStation } ><button>seek</button></div>
      </div>
    );
  }
}
export default AudioPlayer;