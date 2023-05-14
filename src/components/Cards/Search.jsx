import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.scss";

const Search = ({ getFilter }) => {
  const [inputVal, setInputVal] = useState("");

  const handleClick = () => {
    getFilter(inputVal);
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row pb-3">
          <div className="col s6 ml-auto text-center">
            <div className="input-field">
              <input
                type="text"
                placeholder="Search for characters"
                value={inputVal}
                onChange={handleInputChange}
              />
              <button className="btn btn-primary" onClick={handleClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
