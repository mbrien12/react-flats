import React, { Component } from 'react';
import flats from '../flats';
import FlatList from './FlatList';
import Map from './Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: { flats },
      lat: 48.884211,
      lng: 2.34689,
      name: "Charm at the Steps of the Sacre Coeur/Montmartre"
    };
  }

  selectFlat = (props) => (event) => {
    this.setState({
      lat: props.lat,
      lng: props.lng,
      name: props.name,
    })
  }

  render() {
    return (
      <div className="flat-map-container">
        <div className="left">
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        </div>
        <div className="right">
          <Map lat={this.state.lat} lng={this.state.lng} name={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;
