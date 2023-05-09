import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Rick and Morty</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
