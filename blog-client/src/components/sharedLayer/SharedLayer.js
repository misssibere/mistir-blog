import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const SharedLayer = () => {
  return (
    <main className="main">
      <Header />
      <Outlet />
    </main>
  );
};

export default SharedLayer;
