import React, {Component} from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStationName: '',
      stream: '',
      streamType: ''
    }
    this.makeItPlay = this.makeItPlay.bind(this);
  }

  makeItPlay() {
    let player = document.getElementById("player")
    if (player.paused) {
      player.play();
      pButton.className = "";
      pButton.className = "fa fa-pause";
    } else {
      player.pause();
      pButton.className = "";
      pButton.className = "fa fa-play";
    }

  }


  render() {
    return (
      <div>
        <audio id="player">
          <source src={ this.props.stationFeed.stream } type={ this.props.stationFeed.type } />
        </audio>
        <div>
          <div className="player-station-name"> Current Station: { this.props.stationFeed.name } </div>
          <i id="pButton" className="fa fa-play" aria-hidden="true" onClick={ this.makeItPlay } ></i>
          <div className="seek-button" onClick={ this.props.seekStation } ><button>seek</button></div>
          <i id="loader" className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
        </div>
      </div>
    );
  }
}
export default AudioPlayer;