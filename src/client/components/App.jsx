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
           <AudioPlayer stationFeed={ this.state.selectedStation } />
        </footer>
      </div>
    );
  }
}
export default App;
