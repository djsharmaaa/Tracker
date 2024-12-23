import React, { useState } from "react";
import Sidebar from "../../ReusableComponents/Sidebar/Sidebar";
import Navbar from "../../ReusableComponents/Navbar/Navbar";
import StatusTab from "../../ReusableComponents/StatusTab/StatusTab";
import "./Dashboard.css";

function Dashboard() {
  const menuSections = [
    {
      heading: null,
      items: [
        { name: "Dashboard", link: "//Admin/Dashboard", icon: "bi bi-speedometer2" },
        { name: "Tracker", link: "/Admin/Tracker", icon: "bi bi-map" },
        { name: "Report", link: "//Admin/Report", icon: "bi bi-bar-chart" },
      ],
    },
    {
      heading: "Administrator",
      items: [
        { name: "Vehicles", link: "/vehicles", icon: "bi bi-truck" },
        { name: "Users", link: "/users", icon: "bi bi-people" },
        { name: "Driver", link: "/driver", icon: "bi bi-person-badge" },
      ],
    },
  ];

  const tabsData = [
    {
      heading: "Total Cars",
      content: "15",
      color: "var(--color-black)",
    },
    {
      heading: "On-Trip Cars",
      content: "5",
      color: "var(--danger-color)",
    },
    {
      heading: "Available Cars",
      content: "5",
      color: "var(--success-color)",
    },
    {
      heading: "Booked Cars",
      content: "5",
      color: "var(--primary-color)",
    },
  ];

  // Sample driver data
  const [drivers, setDrivers] = useState([
    { id: 1, name: "Driver A", status: "Booked", customer: "Customer X" },
    { id: 2, name: "Driver B", status: "On Trip", customer: "Customer Y" },
    { id: 3, name: "Driver C", status: "Available", customer: "-" },
    // Add more driver data as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 5;

  // Pagination logic
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Sidebar logoSrc="/images/DD.png" logoText="Doordarshan" menuSections={menuSections} />

      <div>
        <Navbar
          title="Dashboard"
          placeholder="Search for something..."
          profileImg="/images/DD.png"
          profileName="Admin"
        />
      </div>
      <div className="mt-5">
        <StatusTab tabs={tabsData} />
      </div>

      {/* Driver Details List */}
      <div className="driver-details mt-5 px-4">
        <h4>Driver Details</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Driver Name</th>
              <th>Status</th>
              <th>Customer Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map((driver, index) => (
              <tr key={driver.id}>
                <td>{indexOfFirstDriver + index + 1}</td>
                <td>{driver.name}</td>
                <td>{driver.status}</td>
                <td>{driver.customer}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-sm btn-secondary dropdown-toggle"
                      type="button"
                      id={`dropdownMenu${driver.id}`}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenu${driver.id}`}>
                      <li>
                        <button className="dropdown-item">Update</button>
                      </li>
                      <li>
                        <button className="dropdown-item">Accept</button>
                      </li>
                      <li>
                        <button className="dropdown-item">Decline</button>
                      </li>
                      <li>
                        <button className="dropdown-item text-danger">Delete</button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(drivers.length / driversPerPage) }).map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(i + 1)}
              >
                <button className="page-link">{i + 1}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
