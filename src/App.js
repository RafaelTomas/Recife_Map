import React from 'react';
import Map  from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import DeckGL, {GeoJsonLayer,  TextLayer} from 'deck.gl';
import mapData from './bairros.json'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  latitude: -8.05428,
  longitude: -34.8813,
  zoom: 12,
  bearing: 0,
  pitch: 30
};

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';
// const NAV_CONTROL_STYLE = {
//   position: 'absolute',
//   top: 10,
//   left: 10
// };

function Root() {
    const myObject = Object.assign({}, mapData.features)
    console.log(myObject)

  const layers = [
    new GeoJsonLayer({
      id: 'data',
      data: mapData.features,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: f => 11 - f.properties.scalerank,
      getFillColor: [253, 128, 93, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
    }),
    new TextLayer({
      id: 'text-layer',
      data: myObject,
      pickable: true,
      getPosition: d => d.coordinates,
      getText: d => d.name,
      getSize: 32,
      getAngle: 0,
      getTextAnchor: 'middle',
      getAlignmentBaseline: 'center'
    })
  ];

  return (
      <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      >
        <Map
            reuseMaps
            mapStyle="mapbox://styles/mapbox/streets-v11"
            preventStyleDiffing={true}
        />
      </DeckGL>

  );
}

export default Root;
