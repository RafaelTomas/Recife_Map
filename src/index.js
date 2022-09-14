import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './App';
import 'mapbox-gl/dist/mapbox-gl.css';
require('dotenv').config()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>
);

