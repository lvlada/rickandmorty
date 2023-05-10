import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.scss";
import {findCharacters} from '../Services/userAPI'

const Search = ({ characters, getFilter }) => {
  const [inputVal, setInputVal] = useState("");

  const handleClick = () => {
    const newRes = characters.filter((user) =>
      user.name.toString().toLowerCase().includes(inputVal.toLowerCase())
    );
    return getFilter(newRes);
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
                onChange={(e) => {
                  setInputVal(e.target.value);
                }}
                onClick={(e) => {
                  setInputVal("");
                }}
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
