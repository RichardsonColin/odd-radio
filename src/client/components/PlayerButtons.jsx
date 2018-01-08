import React, {Component} from 'react';
import Loader from './Loader.jsx';

class PlayerButtons extends Component {
  render(){

    if(this.props.activeStation && this.props.streamLoading) {
      return(
      <Loader />
      );
    }
    else if (this.props.activeStation && this.props.playState.isPlaying) {
    return (

      <div>
        <i className={"fa fa-pause fa-2x " + this.props.Style}  onClick={ (e) => this.props.clickFunction(this.props.params) } ></i>
      </div>

    );
    } else {
      return (

      <div>
        <i className={"fa fa-play fa-2x " + this.props.Style} onClick={ (e) => this.props.clickFunction(this.props.params) } ></i>
      </div>

      );
    }
  }
}

export default PlayerButtons;