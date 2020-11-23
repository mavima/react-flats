// import React, { Component } from 'react';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'pk.eyJ1IjoibWF2aW1hIiwiYSI6ImNqeWsyamFyYzA5N3QzYmxsczV3eGNrY3UifQ.7zZwEVnDOqbehTUtc62QBg';

// class Map extends Component {
//   constructor(props) {
//     super(props);
//     // const { lat, lng } = this.props.selectedFlat;

//     // console.log(`lat: ${lat} lng: ${lng}`);
//     this.state = {
//       lng: 2.35,
//       lat: 48.85,
//       zoom: 11
//     };
//   }

//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [this.state.lng, this.state.lat],
//       zoom: this.state.zoom
//     });
//   }


//   render() {
//     return (
//       <div>
//         <div ref={el => this.mapContainer = el} />
//       </div>
//     )
//   }
// }

// export default Map;
