import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="root">
    <Header />
    <div className="my-2">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
