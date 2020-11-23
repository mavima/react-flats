import React, { Component } from 'react';
import flats from './flats.js';
import FlatList from './flat_list.jsx';
// import Map from './map.jsx';
import mapboxgl from 'mapbox-gl';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  componentDidMount() {
    this.renderMap();
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }


  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    this.updateMarker;
  }

  updateMarker = () => {
    const { lng, lat } = this.state.selectedFlat;
    const { map, marker } = this.state;
    // remove old marker
    marker.remove();
    // add new marker and update state
    const newMarker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    this.setState({ marker: newMarker });
    // fly to new marker
    map.flyTo({ center: [lng, lat] });
  }

  renderMap = () => {
    const { lat, lng } = this.state.selectedFlat;
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom: 16
    });
    // add map to App state
    this.setState({ map });
    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    // add marker to App state
    this.setState({ marker });
  }


  render() {
    return (
      <div className="container">
        <div>
          <FlatList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
            updateMarker={this.updateMarker}
          />
        </div>
        <div className="map-container" id="map-container">

        </div>
      </div>
    );
  }
}


export default App;
