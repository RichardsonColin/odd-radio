import React, {Component} from 'react';
import { setVolume, makeItPlay, muteAudio} from '../util/ClientFunctions.jsx';
import PlayerButtons from './PlayerButtons.jsx';


class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: ''
    },
    this.makeItPlay = this.makeItPlay.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
  }

  makeItPlay() {
    let player = document.getElementById("player");

    if (this.props.stationFeed.name == '') {
      this.props.seekStation();
    } else if (player.paused) {
      player.play();
      // pButton.className = "";
      // pButton.className = "fa fa-pause fa-2x";
    } else {
      player.pause();
      // pButton.className = "";
      // pButton.className = "fa fa-play fa-2x";
    }
  }

  // Sets volume according to range input.
  setVolume(event) {
    let player = document.getElementById("player");
    player.volume = event.target.value / 100;

    console.log('inside setVolume');

    if (player.volume === 0) {
      mute.className = 'fa fa-volume-up fa-2x';

    } else {
      mute.className = 'fa fa-volume-off fa-2x';

    }
  }

  // Function to toggle mute
  muteAudio(event) {
    let slider = document.getElementById('vol-control');
    let player = document.getElementById('player');

    if (player.volume > 0) {
      console.log(player.volume);
      this.setState({
        volume: player.volume
      })

      mute.className = 'fa fa-volume-up fa-2x';
      player.volume = 0;
      slider.value = 0;
    } else {
      mute.className = 'fa fa-volume-off fa-2x';
      player.volume = this.state.volume;
      slider.value = this.state.volume * 100;
    }
  }

  render() {
    console.log(this.props.stationFeed.audioFeed, this.props.stationFeed.streamType)
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
                <input id="vol-control" type="range" min={ 0 } max={ 100 } step={ 1 } onInput={ this.setVolume } onChange={ this.setVolume }></input>
              </div>
              <div className="three columns">
                <i className="fa fa-random fa-2x seek-button" onClick={this.props.seekStation} ></i>
                <i id="loader" className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
              </div>
              <div className="three columns">
                <i id="mute" className="fa fa-volume-off fa-2x" onClick={ this.muteAudio }></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default AudioPlayer;