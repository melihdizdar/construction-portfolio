import React from "react";
import { GoogleMap, MarkerClusterer } from "@react-google-maps/api";
import Pin from "./Pin";

const Map2 = ({ children }) => {

  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={{
        height: "50vh",
        width: "90%"
      }}
      zoom={15}
      center={{lat: 41.025658, lng: 28.974155}}
    >
      <MarkerClusterer
        options={{
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          styles: []
        }}
      >
        {/* {listings} */}
        {clusterer =>
          [
            {lat: 41.025658, lng: 28.974155}
          ].map((location, i) => (
            <Pin key={i} position={location} clusterer={clusterer} />
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  );
};

Map.defaultProps = {
  mapContainerStyle: {
    height: "50vh",
    width: "90%"
  },
  children: null,
  onLoad: () => {},
  onDragEndFunc: () => {},
  onDragStartFunc: () => {},
  onZoomChangeFunc: () => {}
};

export default Map2;
