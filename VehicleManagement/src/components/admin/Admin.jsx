import React from "react";
import Header from "./admin-sections/Header";
import SideBar from "./admin-sections/SideBar";
import Container from "./admin-sections/Container";
import Footer from "./admin-sections/Footer";

const Admin = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-gray-900 w-64 ">
          <SideBar />
        </div>
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex-grow bg-gray-100 ">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
