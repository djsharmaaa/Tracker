// import React from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// // import leaflet from 'leaflet';
// import './MapComponent.css';

// // Define a custom icon for vehicles
// // const vehicleIcon = new L.Icon({
// //   iconUrl: '/images/vehicle-icon.png', // Replace with your vehicle icon
// //   iconSize: [25, 25],
// //   iconAnchor: [12, 12],
// // });

// function MapComponent({ vehicleData }) {
//   return (
//     <div className="map-container">
//       <MapContainer
//         center={[23.5555819, 7]} 
//         zoom={13}
       
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {/* {vehicleData.map((vehicle, index) => (
//           <Marker
//             key={index}
//             position={[vehicle.lat, vehicle.lng]}
//             icon={vehicleIcon}
//           >
//             <Popup>
//               <strong>{vehicle.name}</strong>
//               <br />
//               Status: {vehicle.status}
//               <br />
//               Last Updated: {vehicle.lastUpdated}
//             </Popup>
//           </Marker>
//         ))} */}
//       </MapContainer>
//     </div>
//   );
// }

// export default MapComponent;
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './MapComponent.css';

// Define custom icons for vehicles
const vehicleIcon = new L.Icon({
  iconUrl: '/images/car.png', 
  iconSize: [25, 25],
  iconAnchor: [12, 12],
});

const anotherIcon = new L.Icon({
  iconUrl: '/images/car.png',
  iconSize: [25, 25],
  iconAnchor: [12, 12],
});

function MapComponent({ vehicleData = [] }) { 
  if (!vehicleData || vehicleData.length === 0) {
    return <div>No vehicles data available</div>; 
  }

  return (
    <div className="map-container">
      <MapContainer center={[23.5609, 72.7511]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Display markers with custom icons */}
        {vehicleData.map((vehicle, index) => (
          <Marker
            key={index}
            position={[vehicle.lat, vehicle.lng]}
            icon={index % 2 === 0 ? vehicleIcon : anotherIcon} // Toggle between two icons
          >
            <Popup>
              <strong>{vehicle.name}</strong>
              <br />
              Status: {vehicle.status}
              <br />
              Last Updated: {vehicle.lastUpdated}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
