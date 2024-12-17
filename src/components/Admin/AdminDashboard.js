import React from 'react';
import Sidebar from '../ReusableComponents/Sidebar/Sidebar';
import Navbar from '../ReusableComponents/Navbar/Navbar';
import StatusTab from '../ReusableComponents/StatusTab/StatusTab';
import MapComponent from '../ReusableComponents/MapComponent/MapComponent';

function AdminDashboard() {

  const menuSections = [
    {
      heading: null,
      items: [
        { name: 'Dashboard', link: '/dashboard', icon: 'bi bi-speedometer2' },
        { name: 'Tracker', link: '/tracker', icon: 'bi bi-map' },
        { name: 'Report', link: '/report', icon: 'bi bi-bar-chart' },
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
        title="Dashboard"
        placeholder="Search for something..."
        profileImg="/images/DD.png"
        profileName="Admin"
      />
      <div className="mt-5">
          <StatusTab tabs={tabsData} />
        </div>
        <MapComponent  />
    </div>
  </div>
  );
}

export default AdminDashboard;
