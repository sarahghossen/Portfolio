import React, { useState } from "react";
import styled from "styled-components";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import MapStyles from "./MapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "40vw",
  height: "50vh",
  marginRight: "40px",
  outline: "none",
};
const center = {
  lat: 45.50169,
  lng: -73.567253,
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

const MapAPI = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <MapWrapper>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      >
        <Marker
          style={{
            outline: "none",
          }}
          // key={store.feature.id}
          position={{
            lat: 45.50169,
            lng: -73.567253,
          }}
          // onClick={() => {
          //   setSelectedStore(store);
          // }}
          icon={{
            url: "/images/avocado.png",
            scaledSize: new window.google.maps.Size(55, 60),
          }}
        />
      </GoogleMap>
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  & div {
    &:focus {
      outline: none;
    }
  }
`;

export default MapAPI;
