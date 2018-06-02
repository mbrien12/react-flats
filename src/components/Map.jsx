import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  render() {
    const location = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng,
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
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
          <Marker />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
