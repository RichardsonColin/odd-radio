import React, {Component} from 'react';
import Station from './Station.jsx';

class StationList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const station = this.props.stations.map((post, index) => {
      let isActive;
      if (post.id === this.props.activeStation) {
        isActive = true;
      } else {
        isActive = false;
      }

      if (index % 2 === 0) {
        return <Station
          key={ post.id }
          id={ post.id }
          name={ post.name }
          description={ post.description }
          audioFeed={ post.audio_feed }
          streamType={ post.stream_type }
          homePage={ post.home_page }
          city={ post.city }
          handleSelectedStation={ this.props.handleSelectedStation }
          stationType={1}
          activeStation={ isActive }
          playState={ this.props.playState }
          streamLoading={ this.props.streamLoading }
           />
      } else {
        return <Station
          key={ post.id }
          id={ post.id }
          name={ post.name }
          description={ post.description }
          audioFeed={ post.audio_feed }
          streamType={ post.stream_type }
          homePage={ post.home_page }
          city={ post.city }
          handleSelectedStation={ this.props.handleSelectedStation }
          stationType={2}
          activeStation={ isActive }
          playState={ this.props.playState }
          streamLoading={ this.props.streamLoading }
           />
      }
    });

    return (
      <section className="station-list-container">
        { station }
      </section>
    )
  }
}
export default StationList;