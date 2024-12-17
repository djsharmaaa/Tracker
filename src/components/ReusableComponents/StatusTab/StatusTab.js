import React, { useState } from 'react';
import './StatusTab.css';

function StatusTab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="Status-tabs">
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            style={{
              borderColor: activeTab === index ? tab.color : 'lightgrey',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = tab.color; 
            }}
            onMouseOut={(e) => {
              if (activeTab !== index) e.currentTarget.style.borderColor = 'lightgrey'; 
            }}
            onClick={() => setActiveTab(index)}
          >
            <div className="tab-heading" style={{ color: tab.color }}>{tab.heading}</div>
            <div className="tab-content" style={{ color: tab.color }}>
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusTab;
