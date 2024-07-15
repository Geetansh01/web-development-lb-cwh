import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      {/* all the children elements in the nedted routes */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
