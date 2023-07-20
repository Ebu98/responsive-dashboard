import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerPage from "../../Pages/Customer";
import DashBoard from "../../Pages/Dashboard";
import InventoryPage from "../../Pages/Inventory";
import OrderPage from "../../Pages/Order";

const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/customer" element={<CustomerPage />} />
    </Routes>
  );
};

export default RouteApp;
