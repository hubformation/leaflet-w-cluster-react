import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useLeaflet } from "react-leaflet";

const markerClusters = L.markerClusterGroup();
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41]
});

const MarkerCluster = ({ markers, addMarkers }) => {
  const { map } = useLeaflet();


  
    useEffect(() => {
    markerClusters.clearLayers();
    markers.forEach((feature) => {
        let [lng, lat] = feature.geometry.coordinates;
        console.log('lat',lat,'long',lng);
      return L.marker(new L.LatLng(lat, lng), {
        icon: customIcon
      }).addTo(markerClusters)
    });
    /*
    markers.forEach(({ position }) => {
        let {lat, lng}=position;
        console.log('lat',lat,'long',lng);
      return L.marker(new L.LatLng(lat, lng), {
        icon: customIcon
      }).addTo(markerClusters)
    });
    */
    
    
    map.addLayer(markerClusters);
  }, [markers, map]);

  map.on("moveend", () => {
    const start = window.performance.now();

    addMarkers();
    const markersToAdd = [];
    markerClusters.clearLayers();
    /*
    markers.forEach(({ position }) => {
      const markerToAdd = L.marker(new L.LatLng(position.lat, position.lng), {
        icon: customIcon
      }).bindPopup(
          `<strong>I'm a beautiful pop-up</strong>`);

      if (markerToAdd !== undefined) {
        markersToAdd.push(markerToAdd);
      }
    });
    */
     markers.forEach((feature) => {
         let [lng, lat] = feature.geometry.coordinates;
      const markerToAdd = L.marker(new L.LatLng(lat, lng), {
        icon: customIcon
      }).bindPopup(feature.properties.popupContent);

      if (markerToAdd !== undefined) {
        markersToAdd.push(markerToAdd);
      }
    });
    
    markerClusters.addLayers(markersToAdd);
    const end = window.performance.now();
    console.log(`Time of adding markers and clusters: ${end - start}ms`);
  });

  return null;
};

export default MarkerCluster;
