// MapComponent.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngBounds, Icon } from "leaflet";
import customMarkerIcon from "/location-pin.png"; // Ganti path ini dengan path ke file gambar ikon kustom

const indonesiaBounds = new LatLngBounds(
  [-10.0, 95.0], // Koordinat barat daya
  [6.0, 141.0] // Koordinat timur laut
);

// Membuat instance ikon Leaflet baru dengan gambar kustom
const customIcon = new Icon({
  iconUrl: customMarkerIcon,
  iconSize: [41, 41], // Ukuran ikon (width, height)
  iconAnchor: [12, 41], // Anchor ikon (untuk penempatan)
  popupAnchor: [10, -24], // Anchor popup (untuk penempatan)
  shadowSize: [41, 41], // Ukuran bayangan (optional)
});

// eslint-disable-next-line react/prop-types
const MapComponent = ({ dealers }) => {
  return (
    <MapContainer
      style={{ height: "500px", width: "100%" }}
      bounds={indonesiaBounds}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {dealers.map((dealer, idx) => (
        <Marker key={idx} position={[dealer.lat, dealer.lng]} icon={customIcon}>
          <Popup>
            <div className="flex flex-col">
              <img
                className="w-full h-48 object-cover"
                src={dealer.image}
                alt=""
              />
              <strong>{dealer.name}</strong>
              {dealer.services}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
