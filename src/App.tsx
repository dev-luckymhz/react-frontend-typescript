import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import {Route, Routes} from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <div
          id="main-wrapper"
          data-layout="vertical"
          data-navbarbg="skin5"
          data-sidebartype="full"
          data-sidebar-position="absolute"
          data-header-position="absolute"
          data-boxed-layout="full"
      >
        <Navbar />
        <Sidebar />

        <div className="page-wrapper">
            <Routes>
            <Route path={'/'} element={<Dashboard/>}/>
            <Route path={'/user'} element={<Users/>}/>
            </Routes>
          <Footer />

        </div>
      </div>
    </div>
  );
}

export default App;
