import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";

const AppRouter = () => {
  return (
    // <BrowserRouter>
      <Routes>
        {/* Wrap all routes in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          {/* 404 fallback */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    // </BrowserRouter>
  );
};

export default AppRouter;
