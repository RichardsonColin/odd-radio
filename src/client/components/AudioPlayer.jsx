import React, {Component} from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStationName: "CILU",
      stream: "http://luradio-server.lakeheadu.ca:8000/stereo128.mp3",
      streamType: "audio/mp3"
    }
  }

  render() {
    return (
      <div>
        <div className="player-station-name"> { this.state.currentStationName } </div>
        <audio controls="controls">
          <source src={ this.state.stream } type={ this.state.streamType } />
        </audio>
        <div className="seek-button"><button>seek</button></div>
      </div>
    );
  }
}
export default AudioPlayer;