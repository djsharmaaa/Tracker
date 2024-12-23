import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({
  logoSrc = "/images/DD.png",
  logoText = "Doordarshan",
  menuSections = [],
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Burger Menu */}
      <div
        className={`burger-menu d-md-none ${isSidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <i className={`bi ${isSidebarOpen ? "bi-x" : "bi-list"}`}></i>
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar bg-light shadow-sm ${
          isSidebarOpen ? "active" : ""
        } d-md-block`}
      >
        {/* Logo Section */}
        <div className="logo text-center p-4">
          <h6 className="d-flex align-items-center justify-content-center">
            <img src={logoSrc} alt="Logo" className="logo-img me-3" />
            {logoText}
          </h6>
        </div>

        {/* Menu Section */}
        <ul className="menu list-unstyled w-100">
          {menuSections.map((section, index) => (
            <div key={index} className="mb-3">
              {section.heading && (
                <li className="menu-heading text-muted px-3 mt-2">
                  {section.heading}
                </li>
              )}
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="py-2 px-3">
                  <NavLink
                    to={item.link}
                    className="text-decoration-none text-dark d-block"
                    activeClassName="active"
                    end
                  >
                    {item.icon && <i className={`${item.icon} me-2`}></i>}
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
