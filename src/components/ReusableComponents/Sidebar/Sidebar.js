import React from 'react';
import './Sidebar.css';

function Sidebar({ logoSrc = '/images/DD.png', logoText = 'Doordarshan', menuSections = [] }) {
  return (
    <div className="sidebar bg-light shadow-sm">
      {/* Logo Section */}
      <div className="logo text-center p-4">
        <h6 className="d-flex align-items-center justify-content-center">
          <img src={logoSrc} alt="Logo" className="logo-img me-3" />
          {logoText}
        </h6>
      </div>

      {/* Menu Sections */}
      <ul className="menu list-unstyled w-100">
        {menuSections.map((section, index) => (
          <div key={index} className="mb-3">
            {/* Section Heading */}
            {section.heading && <li className="menu-heading text-muted px-3 mt-2">{section.heading}</li>}

            {/* Sub-items */}
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="py-2 px-3">
                <a href={item.link} className="text-decoration-none text-dark d-block">
                  {item.icon && <i className={`${item.icon} me-2`}></i>}
                  {item.name}
                </a>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
