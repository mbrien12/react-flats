import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class Map extends Component {
  render() {
    const location = {
      center: {
        lat: 48.88421,
        lng: 2.34689,
      },
      zoom: 11
    };

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCk9rppzjUODoa79gBcFmGWQ6vQlfC-U1M" }}
          defaultCenter={location.center}
          defaultZoom={location.zoom}
        >
          <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          text={this.props.name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
