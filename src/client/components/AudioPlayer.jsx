import React, {Component} from 'react';
import PlayerButtons from './PlayerButtons.jsx';
import VolumeControls from './VolumeControls.jsx';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1,
      beforeMuteVolume: 1
    },
    this.setVolume = this.setVolume.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
  }

  // Sets volume according to range input.
  setVolume(event) {
    let player = document.getElementById("player");
    
    this.setState({
      volume: event.target.value / 100
    }, () => {
      player.volume = this.state.volume;
    })
  }

  // Function to toggle mute
  muteAudio() {
    let player = document.getElementById("player");
    
    if (this.state.volume > 0) {
      this.setState({
        volume: 0,
        beforeMuteVolume: this.state.volume
      }, () => {
        player.volume = this.state.volume;
      });
    } else {
      this.setState({
        volume: this.state.beforeMuteVolume
      }, () => {
        player.volume = this.state.volume;
      });
    }
  }

  render() {
    return (
      <div>
        <audio id="player" >
          <source src={ this.props.stationFeed.audioFeed } type={ this.props.stationFeed.streamType } />
        </audio>
        <div>
          <div className="player-station-name"> Current Station: { this.props.stationFeed.name } </div>
          <div className="container player-container">
            <div className="row player-row border">
              <div className="three columns">
                <PlayerButtons activeStation={ true } playState={ this.props.playState } clickFunction={ this.props.playPause }/>
              </div>
              <div className="three columns">
                <VolumeControls volume={ this.state.volume } setVolume={ this.setVolume } muteAudio={ this.muteAudio }/>
              </div>
              <div className="three columns">
                <i className="fa fa-random fa-2x seek-button" onClick={this.props.seekStation} ></i>
                <i id="loader" className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AudioPlayer;