import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './Styles/global.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './components/Login/Login';


import Tracker from './components/Admin/TrackerPage/Tracker';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Report from './components/Admin/Reports/Report';





function App() {
  return (
  <Router>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path="/Admin" element={<Admin/>}/>
    <Route path="/Admin/Dashboard" element={<Dashboard/>}/>
    <Route path="/Admin/Tracker" element={<Tracker/>}/>
    <Route path="/Admin/Report" element={<Report/>}/>

    
    </Routes>
  </Router>

  );
}

export default App;
