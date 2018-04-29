import React, {Component} from 'react';
import Station from './Station.jsx';
import Masthead from './Masthead.jsx';

class StationList extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    let counter = 0;
    const station = this.props.stations.map((post, index) => {

      //check if the searchFilter is empty
      if (this.props.SearchFilter !== "") {
        //if the searchFilter is not empty check if it matches any of the stations. If it is not a match return.
        if ((post.name.toLowerCase().indexOf(this.props.searchFilter.toLowerCase()) === -1) &&
            (post.city.toLowerCase().indexOf(this.props.searchFilter.toLowerCase()) === -1) &&
            (post.description.toLowerCase().indexOf(this.props.searchFilter.toLowerCase()) === -1) &&
            (post.province.toLowerCase().indexOf(this.props.searchFilter.toLowerCase()) === -1)) {
          return;
        }
        //if the searchFilter matches add one to the counter
        counter++;
        let isActive = false;
        let divStyle = 2;

        if (post.id === this.props.activeStation) {
        isActive = true;
        }
        // return search results with
        if (counter % 2 === 0) {
          divStyle = 2;
        } else {
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

      } else {
      // if the search filter is empty return all of the stations
        if (index % 2 === 0) {
          divStyle = 1;
        } else {
          divStyle = 2;
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
      }
    });

    return (
      <section className="station-list-container">
        { station }
        <Masthead />
      </section>
    )
  }
}
export default StationList;