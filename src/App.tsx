import React from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard";
import {Route, Routes} from "react-router-dom";
import Users from "./pages/Users";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'}  element={<Dashboard/>}/>
            <Route path={'/user'} element={<Users/>}/>
            <Route path={'/register'} element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
