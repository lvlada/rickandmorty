import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="header-link">
          <h3>Rick and Morty</h3>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
