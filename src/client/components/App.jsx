import React, {Component} from 'react';
import { handleSelectedStation, handlePlayState, seekStation, generateRandomStationId, loadStations } from '../util/ClientFunctions.jsx';

import AudioPlayer from './AudioPlayer.jsx';
import StationList from './StationList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      selectedStation: {
        id: "",
        name: "",
        stream: "",
        type: ""
      }
    },
    this.handlePlayState = handlePlayState.bind(this);
    this.handleSelectedStation = handleSelectedStation.bind(this);
    this.seekStation = seekStation.bind(this);
    this.generateRandomStationId = generateRandomStationId.bind(this);
    this.loadStations = loadStations.bind(this);
  }

  componentDidMount() {
    this.loadStations();
  }

  render() {
    return (
      <div>
        <header>
          <h1>oddrad.io</h1>
          <h3>A curated collection of the odd sounds of Canadian college radio.</h3>
        </header>
          <StationList handleSelectedStation={ this.handleSelectedStation } stations={ this.state.stations }/>
        <footer>
           <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation } />
        </footer>
      </div>
    );
  }
}
export default App;
