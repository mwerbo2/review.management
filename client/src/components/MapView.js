import React from 'react';
import ReactMapGL from 'react-map-gl';

class MapView extends React.Component {

  state = {
    viewport: {
      width: '100%',
      height: '100vh',
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default MapView;
