import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
// import leaflet from 'leaflet';
import './MapComponent.css';

// Define a custom icon for vehicles
// const vehicleIcon = new L.Icon({
//   iconUrl: '/images/vehicle-icon.png', // Replace with your vehicle icon
//   iconSize: [25, 25],
//   iconAnchor: [12, 12],
// });

function MapComponent({ vehicleData }) {
  return (
    <div className="map-container">
      <MapContainer
        center={[23.0225, 72.5714]} 
        zoom={13}
        style={{ height: '480px', width: '85%' , marginLeft:'200px'}}
      >
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* {vehicleData.map((vehicle, index) => (
          <Marker
            key={index}
            position={[vehicle.lat, vehicle.lng]}
            icon={vehicleIcon}
          >
            <Popup>
              <strong>{vehicle.name}</strong>
              <br />
              Status: {vehicle.status}
              <br />
              Last Updated: {vehicle.lastUpdated}
            </Popup>
          </Marker>
        ))} */}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
