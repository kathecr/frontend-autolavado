import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/logo2.svg";

const Header = () => {
  return (
    <>
      <header className="flex bg-indigo-900 items-center h-50 w-full">
        <Link to="/" className="header">
          <Logo className="w-24" />
          <h4 className="m-5 2xl">Autolavado Tres Esquinas</h4>
        </Link>
      </header>
    </>
  );
};

export default Header;
