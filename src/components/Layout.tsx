import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (children: React.ReactNode) => (
  <div className="root">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
