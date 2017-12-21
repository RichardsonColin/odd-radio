import React, {Component} from 'react';
import PlayerButtons from './PlayerButtons.jsx';
import Loader from './Loader.jsx';
import VolumeControls from './VolumeControls.jsx';
import { findStationExpandInfo } from '../util/ClientFunctions.jsx';


class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioLoad: false,
      volume: 1,
      beforeMuteVolume: 1
    },
    this.setVolume = this.setVolume.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onCanPlay = this.onCanPlay.bind(this);
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

  onLoad(e) {
    console.log('e', e);
    console.log('in load event');
    this.setState({
      audioLoad: true
    })
  }

  onCanPlay(e) {
    console.log('e', e);
    console.log('in play event');
    this.setState({
      audioLoad: false
    })
  }

  render() {
    return (
      <div>
        <audio id="player" onLoadStart={ (e) => this.onLoad(e) } onCanPlay={ (e) => this.onCanPlay(e) } >
          <source src={ this.props.stationFeed.audioFeed } type={ this.props.stationFeed.streamType } />
        </audio>
        <div>
          <div className="player-station-name" onClick={ (e) => findStationExpandInfo(this.props.stationFeed.name) }>Current Station: { this.props.stationFeed.name }</div>
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
              </div>
              <Loader audioLoad={ this.state.audioLoad } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AudioPlayer;