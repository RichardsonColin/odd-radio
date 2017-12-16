import React, {Component} from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStationName: '',
      stream: '',
      streamType: ''
    }
    this.audioPlayer = this.audioPlayer.bind(this)
  }

  componentDidMount() {
    this.setState({
      currentStationName: this.props.stationFeed.name,
      stream: this.props.stationFeed.stream,
      streamType: this.props.stationFeed.type
    })
  }

  audioPlayer(event) {
    console.log(event);
  }

  render() {
    console.log('inside AudioPlayer');
    return (
      <div>
        <div className="player-station-name"> { this.props.currentStationName } </div>
        <audio controls="controls" >
          <source src={ this.state.stream } type={ this.state.streamType } />
        </audio>
        <div className="seek-button"><button>seek</button></div>
      </div>
    );
  }
}
export default AudioPlayer;