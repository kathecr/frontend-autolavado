import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="header">
          <h4 className="header__title">Autolavado Tres Esquinas</h4>
        </Link>
      </header>
    </>
  );
};

export default Header;
