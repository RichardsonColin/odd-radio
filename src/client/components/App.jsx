import React, {Component} from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import StationList from './StationList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      selectedStation: {
        name: "",
        stream: "",
        type: ""
      }
    },
    this.handleSelectedStation = this.handleSelectedStation.bind(this);
    this.seekStation = this.seekStation.bind(this);
    this.generateRandomStationId = this.generateRandomStationId.bind(this);
  }

  handleSelectedStation(name, stream, type) {
    console.log(name);
    this.setState({
      selectedStation: {
        name: name,
        stream: stream,
        type: type
      }
    });
    document.getElementById("player").load();
    document.getElementById("player").play();
  }

  generateRandomStationId() {
    const seekLength = this.state.stations.length - 1;
    return Math.floor(Math.random() * seekLength);
  }

  seekStation() {
    const randomStationId = this.generateRandomStationId();

    for(const station of this.state.stations) {

      // Checks to see if the seek matches the currently playing station.
      if(randomStationId === this.state.stations.id) {
        seekStation();

      // Plays the seeked station.
      } else if(randomStationId === station.id) {
          this.handleSelectedStation(station.name, station.audio_feed, station.stream_type);
      }
    }
  }

  componentDidMount() {
    fetch('/api/stations')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({ stations: json })
        console.log('parsed json', json)
      }).catch((ex) => {
        console.log('parsing failed', ex)
      });
    console.log("Mounted");
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Odd Radio - Your link to curated, independent, Great, Canadian radio</h1>
        </header>
          <StationList handleSelectedStation={ this.handleSelectedStation } stations={ this.state.stations } />
          <div className="station-container">
            <header>
              <span className="station-name">NAME</span>
              <button className="station-play-button">play</button>
              <button className="station-info-button">info</button>
            </header>
            <main>
              <span className="station-location">Location:</span>
              <span className="station-description">Description:</span>
              <span className="station-link">Link:</span>
              <span className="station-stream">Stream: http://onair.cfcr.ca/hifi.mp3</span>
            </main>
          </div>
        <footer>
           <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation } />
        </footer>
      </div>
    );
  }
}
export default App;
