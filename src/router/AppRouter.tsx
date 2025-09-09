import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ManageQR from "../pages/qR";
import Profile from "../pages/Profile";
import Transactions from "../pages/Transactions";

const AppRouter = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Wrap all routes in MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/manageQR" element={<ManageQR />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/transactions" element={<Transactions />} />
        {/* 404 fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
    // </BrowserRouter>
  );
};

export default AppRouter;
