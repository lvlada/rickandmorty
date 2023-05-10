import React, { useEffect, useState } from "react";
import IdCard from "./IdCard";
import Search from "./Search";
import "./Card.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllCharacters } from "../Services/userAPI";
import ReactPaginate from "react-paginate";
import debounce from "lodash.debounce";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getCharacters = debounce(async () => {
      try {
        const data = await fetchAllCharacters(`?page=${currentPage}`);
        setCharacters(data.results);
        setPageCount(data.info.pages);
      } catch (error) {
        console.error(error);
      }
    }, 500);
    
    getCharacters();
    characters.length = 10;
  }, [currentPage]);

  const handleFilterChange = (value) => {
    setFilterCharacters(value);
  };

  const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected + 1);
  };

  console.log('Res', characters);
  console.log('Page', currentPage);

  return (
    <>
      <Search characters={characters} onFilterChange={handleFilterChange} />

      <div className="container cards">
        <div className="row justify-content-center">
          <div className="col-12">
            {filterCharacters.length > 0 &&
              filterCharacters.map((character) => (
                <IdCard
                  content={character}
                  id={character.id}
                  key={character.id}
                />
              ))}

            {characters &&
              filterCharacters.length === 0 &&
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
        />
      </div>
    </>
  );
};

export default Cards;
