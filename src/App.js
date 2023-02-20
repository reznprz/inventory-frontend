import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import React, { Component }  from 'react';
import ListStaffComponent from './components/pages/staffpages/ListStaffComponent';
import CreateStaffComponent from './components/pages/staffpages/CreateStaffComponent';
import CreateStaffFunction from './components/pages/staffpages/CreateStaffFunction';
import TableComponent from './components/pages/staffpages/TableComponent';
//import { withRouter } from "react-router-dom";

function App() {
  return (
    <Router>
    <div >
      <NavBar />
      <Routes>
        <Route excat path="/" element={<HomePage/>} />
        <Route excat path="/about" element={<AboutPage/>} />
        <Route excat path="/contact" element={<ContactPage/>} />
        <Route excat path="/staff-info" element={<ListStaffComponent/>} />
        <Route excat path="/addstaff/:id" element={<CreateStaffComponent/>} />
        <Route excat path="/staff-info/addstaff/:id" element={<CreateStaffComponent/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
