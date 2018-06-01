import React, { Component } from 'react';
import flats from '../flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flats: { flats } };
  };

  render() {
    return (
      <div className="flat-map-container">
        <div className="left">
          <h1>Flat list here</h1>
        </div>
        <div className="right">
          <h1>Map here</h1>
        </div>
      </div>
    );
  }
}

export default App;
