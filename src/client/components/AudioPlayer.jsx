import React, {Component} from 'react';
import { setVolume, makeItPlay, muteAudio} from '../util/ClientFunctions.jsx';
import PlayerButtons from './PlayerButtons.jsx';
import VolumeControls from './VolumeControls.jsx';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1
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
  muteAudio(event) {
    let slider = document.getElementById('vol-control');
    let player = document.getElementById('player');

    if (this.state.volume > 0) {
      // this.setState({
      //   volume: 0
      // }, () => {
      //   play.volume = this.state.volume;
      // })

      // // mute.className = 'fa fa-volume-off fa-2x';
      // player.volume = 0;
      slider.value = 0;
    } else {
      // mute.className = 'fa fa-volume-up fa-2x';
      player.volume = this.state.volume;
      slider.value = this.state.volume * 100;
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