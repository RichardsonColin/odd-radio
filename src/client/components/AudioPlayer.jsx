import React, {Component} from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStationName: '',
      stream: 'http://onair.cfcr.ca/hifi.mp3',
      streamType: ''
    }
  }


  render() {
    console.log('inside AudioPlayer', this.state.stream);
    return (
      <div>
        <div className="player-station-name"> { this.props.currentStationName } </div>
        <audio controls="controls" ref="audio" id="audioPlayer">
          <source src={ this.props.stationFeed.stream } type={ 'audio/mp3' } />
        </audio>
        <div className="seek-button"><button>seek</button></div>
      </div>
    );
  }
}
export default AudioPlayer;