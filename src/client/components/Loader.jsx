import React, {Component} from 'react';

class Loader extends Component {
  render(){
    return(
    <div>
      <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    </div>
    );
  }
}

export default Loader;