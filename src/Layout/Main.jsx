import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import SideBar from "../Pages/Shared/SideBar/SideBar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-no-wrap">
        <SideBar></SideBar>
        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-full">
            {/* Place your content here */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
