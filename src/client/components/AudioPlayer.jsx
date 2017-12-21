import React, {Component} from 'react';
import PlayerButtons from './PlayerButtons.jsx';
import VolumeControls from './VolumeControls.jsx';
import { findStationExpandInfo } from '../util/ClientFunctions.jsx';


class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1,
      beforeMuteVolume: 1,
      width: window.innerWidth
    },
    this.setVolume = this.setVolume.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
    this.detectWidth = this.detectWidth.bind(this);
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

  detectWidth() {
    this.setState({
      width: window.innerWidth
    });
  }

  componentDidMount() {
    this.detectWidth();
  }

  render() {
    return (
      <div>
        <audio id="player" onLoadStart={ (e) => this.props.onLoadStart(e) } onCanPlay={ (e) => this.props.onCanPlay(e) } >
          <source src={ this.props.stationFeed.audioFeed } type={ this.props.stationFeed.streamType } />
        </audio>
        <div>
          <div className="player-station-name" onClick={ (e) => findStationExpandInfo(this.props.stationFeed.name) }>Current Station: { this.props.stationFeed.name }</div>
          <div className="container player-container">
            <div className="row player-row border">
              <div className="three columns">
                <PlayerButtons activeStation={ true } playState={ this.props.playState } streamLoading={ this.props.streamLoading }
                clickFunction={ this.props.playPause } />
              </div>
              { this.state.width > 768 &&
                <div className="three columns">
                  <VolumeControls volume={ this.state.volume } setVolume={ this.setVolume } muteAudio={ this.muteAudio }/>
                </div>
              }
              <div className="three columns">
                <i className="fa fa-random fa-2x seek-button" onClick={this.props.seekStation} ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AudioPlayer;