import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import React from "react";
import { MapProps } from "../../types/mapTypes";

const defaults = {
  zoom: 2,
};

const Map: React.FC<MapProps> = ({
  position,
  zoom = defaults.zoom,
  countriesData,
}) => {
  const maps = {
    base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "60vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        {countriesData &&
          countriesData.map((country) => (
            <Marker
              key={country.country}
              position={[country.lat, country.lng]}
              draggable={false}
            >
              <Popup>
                <strong>{country.country}</strong>
                <br />
                <span
                  className="inline-block mr-1 h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#4a90e2" }}
                ></span>
                Active Cases: {country.active}
                <br />
                <span
                  className="inline-block mr-1 h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#4ae24a" }}
                ></span>
                Recovered Cases: {country.recovered}
                <br />
                <span
                  className="inline-block mr-1 h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#e24a4a" }}
                ></span>
                Deaths: {country.deaths}
                <br />
                Total Cases: {country.cases}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
