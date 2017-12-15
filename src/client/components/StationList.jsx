import React, {Component} from 'react';
import Station from './Station.jsx';

class StationList extends Component {
  render() {
    const station = this.props.stations.map((post) => {
      return <Station
        key={ post.id }
        name={ post.name }
        description={ post.description }
        audioFeed={ post.audio_feed }
        homePage={ post.home_page }
        city={ post.city } />
    });

    return (
      <section>
        { station }
      </section>
    )
  }
}
export default StationList;