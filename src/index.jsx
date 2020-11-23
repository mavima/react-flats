import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import mapboxgl from 'mapbox-gl';

import '../assets/stylesheets/application.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoibWF2aW1hIiwiYSI6ImNqeWsyamFyYzA5N3QzYmxsczV3eGNrY3UifQ.7zZwEVnDOqbehTUtc62QBg';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
