import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import React from "react";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const defaults = {
  zoom: 19,
};

const Map: React.FC<MapProps> = ({ posix, zoom = defaults.zoom }) => {
  const maps = {
    base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };

  return (
    <div className="map-container">
      <MapContainer
        center={posix}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "60vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        <Marker position={posix} draggable={false}>
          <Popup>Hey! I study here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
