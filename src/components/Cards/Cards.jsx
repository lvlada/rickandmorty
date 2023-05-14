import React, { useEffect, useState } from "react";
import IdCard from "./IdCard";
import Search from "./Search";
import "./Card.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllCharacters2 } from "../Services/userAPI";
import ReactPaginate from "react-paginate";
import debounce from "lodash.debounce";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(0); 

  useEffect(() => {
    const getCharacters = debounce(async () => {
      try {
        const data = await fetchAllCharacters2(currentPage, filterName);
        setCharacters(data.results.slice(0, 10));
        setPageCount(data.info.pages);
      } catch (error) {
        console.error(error);
      }
    }, 100);

    getCharacters();
  }, [currentPage, filterName]);

  const handleFilterChange = (newName) => {
    setFilterName(newName);
    setCurrentPage(1);
    setActivePage(0);
    console.log("Card info", newName);
  };

  const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected + 1);
    setActivePage(selectedObject.selected);
  };

  console.log("Res", characters);
  console.log("Page", currentPage);

  return (
    <>
      <Search getFilter={handleFilterChange} />

      <div className="container cards">
        <div className="row justify-content-center">
          <div className="col-12">
            {characters &&
              characters.map((character) => (
                <IdCard
                  content={character}
                  id={character.id}
                  key={character.id}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="pagination">
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"container"}
          previousLinkClassName={"page"}
          breakClassName={"page"}
          nextLinkClassName={"page"}
          pageClassName={"page"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
          forcePage={activePage}
        />
      </div>
    </>
  );
};

export default Cards;
