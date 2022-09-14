import React, { useState } from 'react';
import Map  from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import DeckGL, {GeoJsonLayer } from 'deck.gl';
import mapData from '../data/ciclovia.json'

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsdG9tYXMiLCJhIjoiY2w4MGEybTA5MDAxaTN4bXR3dm5mcXNqcSJ9.LohQcscxtloEgIpbhwzY7g';

const INITIAL_VIEW_STATE = {
  latitude: -8.053473587502072,
  longitude: -34.896249644042669,
  zoom: 14,
  bearing: 0,
  pitch: 30
};

function BikeLane() {
  const [hoverInfo, setHoverInfo] = useState("");
  const arrayMap = mapData.features;
  const layers = [
    new GeoJsonLayer({
      id: 'data',
      data: arrayMap,
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: 40,
      getFillColor: [0, 0, 255, 100],
      pickable: true,
      autoHighlight: true,
      pointType: 'text',
      lineWidthMinPixels: 3,
      onHover: info => setHoverInfo(info),
  })
  ];

  return (
      <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      getTooltip={({object}) => object && (object?.properties?.Nome)}>
        <Map
            reuseMaps
            mapStyle="mapbox://styles/mapbox/streets-v11"
            preventStyleDiffing={true}
        />
      </DeckGL>

  );
}

export default BikeLane;
