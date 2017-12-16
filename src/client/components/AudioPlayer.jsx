import React, {Component} from 'react';


class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.makeItPlay = this.makeItPlay.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  makeItPlay() {
    let player = document.getElementById("player")

    if (this.props.stationFeed.name == '') {
      this.props.seekStation();
    } else if (player.paused) {
      player.play();
      pButton.className = "";
      pButton.className = "fa fa-pause";
    } else {
      player.pause();
      pButton.className = "";
      pButton.className = "fa fa-play";
    }

  }

  setVolume(event) {
    let player = document.getElementById("player");
    player.volume = event.target.value / 100
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
          <input id="vol-control" type="range" min={ 0 } max={ 100 } step={ 1 } onInput={ this.setVolume } onChange={ this.setVolume }></input>
          <i className="fa fa-random seek-button" aria-hidden="true" onClick={this.props.seekStation} ></i>
          <i id="loader" className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
        </div>
      </div>
    );
  }
}
export default AudioPlayer;