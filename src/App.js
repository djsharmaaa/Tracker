import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './Styles/global.css';
import AdminDashboard from './components/Admin/AdminDashboard';
import Login from './components/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';





function App() {
  return (
  <Router>
    <Routes>
    <Route path="/admin" element={<AdminDashboard/>}/>
    <Route path='/' element={<Login/>} />
    </Routes>
  </Router>

  );
}

export default App;
