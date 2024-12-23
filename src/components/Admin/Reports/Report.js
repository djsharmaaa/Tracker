import React from 'react';
import Sidebar from '../../ReusableComponents/Sidebar/Sidebar';
import Navbar from '../../ReusableComponents/Navbar/Navbar';
import StatusTab from '../../ReusableComponents/StatusTab/StatusTab';

function Report() {

    const menuSections = [
      {
        heading: null,
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
          title="Report"
          placeholder="Search for something..."
          profileImg="/images/DD.png"
          profileName="Admin"
        />
       
      </div>
      <div className="mt-5">
          <StatusTab tabs={tabsData} />
        </div>
    </div>
    );
  }
  
  

export default Report;
