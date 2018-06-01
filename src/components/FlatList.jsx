import React, { Component } from 'react';
import Flat from './Flat';

class FlatList extends Component {
  render() {
    const flats = this.props.flats.flats;
    return (
      <div className="flat-list">
        {flats.map((flat) => {
          return <Flat flat={flat} key={flat.lng} />;
        })};
      </div>
    );
  }
}

export default FlatList;
