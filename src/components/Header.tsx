import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/logo2.svg";

const Header = () => {
  return (
    <>
      <header className=" bg-indigo-900 h-50 w-full">
        <Link to="/" className="flex flex-row items-center">
          <Logo className="w-24 h-24" />
          <h4 className="m-5 text-2xl font-mono text-white">Autolavado Tres Esquinas</h4>
        </Link>
      </header>
    </>
  );
};

export default Header;
