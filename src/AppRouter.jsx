import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login_1 } from "./components/Login_1";
import {Dashboard} from "./components/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_1 />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
