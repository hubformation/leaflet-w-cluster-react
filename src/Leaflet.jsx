import React from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkerCluster from "./Clusters";
import { Sidebar, Tab } from 'react-leaflet-sidebarv2';
import geojsonFeatureCollection from "./repair-services.json";

const position = [46.0953589, -73.1733771];
const zoom = 5;
const mapStyle = { height: "90vh" };

const Leaflet = () => {
  let markers;

  const addMarkers = async () => {
    //let response = await fetch("/data/trivial.json");
    //let geojsonFeatureCollection1 = await response.json();

    markers = [];
    /*
    for (let feature of geojsonFeatureCollection.features) {
        let [lng, lat] = feature.geometry.coordinates;
      markers.push({
        position: {lng,lat}
      })
    }
    */
    for (let feature of geojsonFeatureCollection.features) {
        let [lng, lat] = feature.geometry.coordinates;
      markers.push(feature)
    }
    
  };

  addMarkers();

  return (
    <>
         <Sidebar
          id="sidebar"
        >
          <Tab id="home" header="Home" icon="fa fa-home">
            <p>No place like home!</p>
          </Tab>
          <Tab id="settings" header="Settings" icon="fa fa-cog" anchor="bottom">
            <p>Settings dialogue.</p>
          </Tab>
        </Sidebar>
      <Map center={position} zoom={zoom} style={mapStyle} maxZoom={20}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerCluster markers={markers} addMarkers={addMarkers} />
      </Map>
      <div>
        clearLayers and addLayers used. Look at the console to check performance
      </div>
    </>
  );
};

export default Leaflet;
