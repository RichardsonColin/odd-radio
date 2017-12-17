import React, {Component} from 'react';
import { handleSelectedStation, handlePlayState, seekStation, generateRandomStationId, loadStations, findColor, scrollListener, setStateSelectedStation } from '../util/ClientFunctions.jsx';


import AudioPlayer from './AudioPlayer.jsx';
import StationList from './StationList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
     this.colors = ['FF81AB', 'A07BE8', '66CBFF', '5CE886', 'F6FF71'];
    this.state = {
      scrollPercent: 0,
      color: '1',
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
    this.scrollListener = scrollListener.bind(this);
    this.findColor = findColor.bind(this);
    this.setStateSelectedStation = setStateSelectedStation.bind(this);

  }

  componentDidMount() {
    this.loadStations();
    this.scrollListener();
    this.setStateSelectedStation();

  }

  render() {
    return (
      <div className="app-container" style={{ backgroundColor: this.findColor() }}>
        <header>
          <h1>oddrad.io</h1>
          <h3>A curated collection of the </h3>
          <h3>odd sounds </h3>
          <h3>of Canadian college </h3>
          <h3>radio.</h3>

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
