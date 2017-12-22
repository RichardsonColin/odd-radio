import React, {Component} from 'react';

class Background extends Component {
  render() {
    return (
      <div className="app-container" style={{ backgroundColor: this.props.findColor() }}>
        </div>
        )
    }
}

export default Background;


