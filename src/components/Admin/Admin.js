import React from 'react';
import Sidebar from '../ReusableComponents/Sidebar/Sidebar';
import Navbar from '../ReusableComponents/Navbar/Navbar';
import StatusTab from '../ReusableComponents/StatusTab/StatusTab';
import MapComponent from '../ReusableComponents/MapComponent/MapComponent';

function Admin() {
  const yourVehicleData = [
    {
      lat: 28.5496,
      lng: 77.1212,
      name: 'Vehicle 1',
      status: 'Active',
      lastUpdated: '2024-12-23 10:00 AM',
    },
    {
      lat: 23.2156,
      lng: 72.6369,
      name: 'Vehicle 2',
      status: 'Inactive',
      lastUpdated: '2024-12-23 09:30 AM',
    },
  ];
  

  const menuSections = [
    {
      heading: null, // No heading for the first section
      items: [
        { name: 'Dashboard', link: '/Admin/Dashboard', icon: 'bi bi-speedometer2' },
        { name: 'Tracker', link: '/Admin/Tracker', icon: 'bi bi-map' },
        { name: 'Report', link: '/Admin/Report', icon: 'bi bi-bar-chart' },
      ],
    },
    {
      heading: 'Administrator',
      items: [
        { name: 'Vehicles', link: '/vehicles', icon: 'bi bi-truck' },
        { name: 'Users', link: '/users', icon: 'bi bi-people' },
        { name: 'Driver', link: '/driver', icon: 'bi bi-person-badge' },
      ],
    },
  ];

  const tabsData = [
    {
      heading: 'Total Cars',
      content: '15',
      color: 'var(--color-black)', 
    },
    {
      heading: 'On-Trip Cars',
      content: '5',
      color: 'var(--danger-color)', 
    },
    {
      heading: 'Available Cars',
      content: '5',
      color: 'var(--success-color)', 
    },
    {
      heading: 'Booked Cars',
      content: '5',
      color: 'var(--primary-color)', 
    },
  ];




  return (
    <div >
     <Sidebar logoSrc="/images/DD.png" logoText="Doordarshan" menuSections={menuSections} />

    <div >
    <Navbar 
        title="Admin Overview"
        placeholder="Search for something..."
        profileImg="/images/DD.png"
        profileName="Admin"
      />
      <div className="mt-5">
          <StatusTab tabs={tabsData} />
        </div>
        <MapComponent vehicleData={yourVehicleData} />

    </div>
  </div>
  );
}

export default Admin;
