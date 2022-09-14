import React, { useState } from 'react';
import Map  from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import DeckGL, {GeoJsonLayer } from 'deck.gl';
import mapData from '../data/bairros.json'

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsdG9tYXMiLCJhIjoiY2w4MGEybTA5MDAxaTN4bXR3dm5mcXNqcSJ9.LohQcscxtloEgIpbhwzY7g';

const INITIAL_VIEW_STATE = {
  latitude: -8.05428,
  longitude: -34.8813,
  zoom: 12,
  bearing: 0,
  pitch: 30
};

function District() {
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
      getFillColor: [253, 128, 93, 180],
      pickable: true,
      autoHighlight: true,
      pointType: 'text',
      lineWidthMinPixels: 1,
      onHover: info => setHoverInfo(info),
  })
  ];

  return (
      <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      >
        {hoverInfo.object  && (
        <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: hoverInfo.x, top: hoverInfo.y}}>
         { hoverInfo.object?.properties?.bairro_nome}
        </div>
      )}
        <Map
            reuseMaps
            mapStyle="mapbox://styles/mapbox/streets-v11"
            preventStyleDiffing={true}
        />
      </DeckGL>

  );
}

export default District;
//79