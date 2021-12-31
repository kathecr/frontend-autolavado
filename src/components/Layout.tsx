import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="root">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
