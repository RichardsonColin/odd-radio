import React, {Component} from 'react';

class StationName extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//       stationName: {
//         firstTwoLetters: this.props.name.slice(1,2),
//         lastTwoLetters: this.props.name.slice(1,2)
//       }
//   }
// }
// this.firstTwoLetters = this.firstTwoLetters.bind(this);



// firstTwoLetters() {
//   return this.stationName;


//   }


//   let name = this.props.StationFeed;
//   let firstTwoLetters = this.props.StationFeed.slice(1,2);


// });

  // this.splitName = this.splitName.bind(this);


  render(){


    return(

        <p className={this.props.Style}> { this.props.StationFeed } {this.props.StationName} </p>

      );
  }
}


export default StationName;