import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.scss";
import { findCharacters } from "../Services/userAPI";


const Search = ({ getFilter }) => {
  const [inputVal, setInputVal] = useState("");
  const [newName, setNewName] = useState("");
  const [newFetch, setNewFetch] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
        const data = await findCharacters(`${newName}`);
        setNewFetch(data.results.slice(0, 10));
        setPageCount(data.info.pages);
      } 

    getCharacters();
  }, [newName]);

  

  useEffect(() => {
    getFilter(newFetch, pageCount, currentPage);
  }, [newFetch, pageCount, currentPage, getFilter]);

  const handleClick = () => {
    setNewName(inputVal);
    setCurrentPage(1);
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
