import React, {Component} from 'react';
import Station from './Station.jsx';

class StationList extends Component {
  render() {
    const station = this.props.stations.map((post, index) => {
      if (index % 2 === 0) {
        return <Station
          key={ post.id }
          id={ post.id }
          name={ post.name }
          description={ post.description }
          audioFeed={ post.audio_feed }
          type={ post.stream_type }
          homePage={ post.home_page }
          city={ post.city }
          handleSelectedStation={ this.props.handleSelectedStation }
          stationType={1}
           />
      } else {
        return <Station
          key={ post.id }
          id={ post.id }
          name={ post.name }
          description={ post.description }
          audioFeed={ post.audio_feed }
          type={ post.stream_type }
          homePage={ post.home_page }
          city={ post.city }
          handleSelectedStation={ this.props.handleSelectedStation }
          stationType={2}
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