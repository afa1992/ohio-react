import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MobNav from "../Layout/Navbar/MobNav";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MobNav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
