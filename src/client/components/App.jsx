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

  seekStation() {
    const seekLength = this.state.stations.length - 1;
    const randomStationId = Math.floor(Math.random() * seekLength);

    for(const station of this.state.stations) {
      if(randomStation === station.id) {
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
          <h1>oddrad.io</h1>
          <h3>A curated collection of the odd sounds of Canadian college radio.</h3>
        </header>
          <StationList handleSelectedStation={ this.handleSelectedStation } stations={ this.state.stations } />
        <footer>
           <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation } />
        </footer>
      </div>
    );
  }
}
export default App;
