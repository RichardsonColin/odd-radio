import React, {Component} from 'react';
import Station from './Station.jsx';

class StationList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const station = this.props.stations.map((post, index) => {
      let isActive = false;
      let divStyle = 2;

      if (post.id === this.props.activeStation) {
        isActive = true;
      }

      if (index % 2 === 0) {
        divStyle = 1;
      }

      return <Station
        key={ post.id }
        id={ post.id }
        name={ post.name }
        description={ post.description }
        audioFeed={ post.audio_feed }
        streamType={ post.stream_type }
        homePage={ post.home_page }
        frequency={ post.frequency }
        city={ post.city }
        province={ post.province }
        handleSelectedStation={ this.props.handleSelectedStation }
        activeStation={ isActive }
        playState={ this.props.playState }
        streamLoading={ this.props.streamLoading }
        stationType={ divStyle }
        findStationExpandInfo={ this.props.findStationExpandInfo }
        expandedState={ this.props.expandedState }
        expandedName={ this.props.expandedName }
        hideStationInfo={ this.props.hideStationInfo }
        presets={ this.props.presets }
        savePreset={ this.props.savePreset }
      />
    });

    return (
      <section className="station-list-container">
        { station }
      </section>
    )
  }
}
export default StationList;