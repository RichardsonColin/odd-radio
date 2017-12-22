import React, {Component} from 'react';

class Ticker extends Component {
  render(){
    if(!this.props.selectedStation.name) {
      return(
        <div></div>
      );
    } else if(!this.props.selectedStation.frequency) {
      return(
        <div>
          <div className="ticker-wrap">
            <div className="ticker">
              <div id="ticker-station" className="ticker__item"> {this.props.selectedStation.name} </div>
              <div id="ticker-city" className="ticker__item">Out of - {this.props.selectedStation.city}</div>
              <div id="ticker-dance" className="ticker__item">♪┏(・o･)┛♪┗ ( ･o･) ┓</div>
              <div id="ticker-brand" className="ticker__item">ODDRAD™</div>
              <div id="ticker-yeah" className="ticker__item">☜(ﾟヮﾟ☜)</div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <div className="ticker-wrap">
            <div className="ticker">
              <div id="ticker-station" className="ticker__item"> {this.props.selectedStation.name} </div>
              <div id="ticker-freq" className="ticker__item">@ {this.props.selectedStation.frequency}</div>
              <div id="ticker-city" className="ticker__item">Out of - {this.props.selectedStation.city}</div>
              <div id="ticker-dance" className="ticker__item">♪┏(・o･)┛♪┗ ( ･o･) ┓</div>
              <div id="ticker-brand" className="ticker__item">ODDRAD™</div>
              <div id="ticker-yeah" className="ticker__item">☜(ﾟヮﾟ☜)</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Ticker;