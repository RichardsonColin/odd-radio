import React, {Component} from 'react';

class PlayerButtons extends Component {
  render(){

    if (this.props.activeStation && this.props.playState.isPlaying) {
    return (

      <div>
        <i className="fa fa-pause fa-2x" onClick={ (e) => this.props.clickFunction(this.props.params) } ></i>
      </div>

    );
    } else {
      return (

      <div>
        <i id="pButton" className="fa fa-play fa-2x" onClick={ (e) => this.props.clickFunction(this.props.params) } ></i>
      </div>

      );
    }
  }
}

export default PlayerButtons;