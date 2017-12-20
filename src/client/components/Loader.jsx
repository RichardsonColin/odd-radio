import React, {Component} from 'react';

class Loader extends Component {
  render(){
    if (this.props.audioLoad) {
      return(
      <div>
        <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
      </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default Loader;