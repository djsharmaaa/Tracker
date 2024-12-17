import React from 'react';
import './Navbar.css';

function Navbar({ title = "Dashboard", placeholder = "Search...", profileImg = "/images/DD.png", profileName = "Admin" }) {
  return (
    <nav className="navbar d-flex align-items-center justify-content-between  px-3 ">
      {/* Title */}
      <div className="navbar-title fw-bold fs-4">{title}</div>

      {/* Right Section */}
      <div className="d-flex align-items-center">
        {/* Search Bar */}
        <input 
          type="text" 
          className="form-control me-3 search-bar" 
          placeholder={placeholder} 
        />

        {/* Notification Icon */}
        <i className="bi bi-bell notification-icon fs-4 me-3" style={{ cursor: "pointer" }}></i>

        {/* Profile Section */}
        <div className="profile d-flex align-items-center">
        <span className="fw-semibold">{profileName}</span>

          <img 
            src={profileImg} 
            alt="Profile" 
            className="profile-pic ms-2" 
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
