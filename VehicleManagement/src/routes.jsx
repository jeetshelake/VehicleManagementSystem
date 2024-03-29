import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Logins from "./components/login folder/Logins";
import SignUp from "./components/login folder/SignUp";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/admin/ContentType.jsx/Dashboard";
import Vehicles from "./components/admin/ContentType.jsx/Vehicles";
import VehicleType from "./components/admin/ContentType.jsx/VehicleType";
import Drivers from "./components/admin/ContentType.jsx/Drivers";
const RouteNavigate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/login'/>}></Route>
        <Route path="/login" element={<Logins />}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="admin-panel" element={<Admin/>}>
        <Route index={true} element={<Navigate to ="dashboard"/>}></Route>
          <Route path="dashboard" element={<Dashboard/>}></Route>
          <Route path="vehicle" element={<Vehicles/>}></Route>
          <Route path="vehicle-type" element={<VehicleType/>}></Route>
          <Route path="drivers" element={<Drivers/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteNavigate;
