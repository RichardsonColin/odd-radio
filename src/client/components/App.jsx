import React, {Component} from 'react';
import { handleSelectedStation, handlePlayState, seekStation, generateRandomStationId, loadStations, findColor, scrollListener, setStateSelectedStation, muteAudio, lastClickedVolume } from '../util/ClientFunctions.jsx';


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
    this.lastClickedVolume = lastClickedVolume.bind(this);
    this.muteAudio = muteAudio.bind(this);

  }

  componentDidMount() {
    this.loadStations();
    this.scrollListener();
    this.setStateSelectedStation();
    this.lastClickedVolume();
    this.muteAudio();

  }

  render() {
    return (
      <div className="app-container" style={{ backgroundColor: this.findColor() }}>
        <header>
        <div className="container title-container">
            <div className="row title-row border">
              <div className="three columns description">
                <h3>A curated collection of the </h3>
                <h3>odd sounds </h3>
                <h3>of Canadian college </h3>
                <h3>radio.</h3>
              </div>
              <div className="three columns"> </div>
              <div className="three columns brand-name">
                <h1>oddrad.io</h1>
              </div>
            </div>
          </div>


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
