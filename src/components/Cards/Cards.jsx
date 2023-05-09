import React, { useEffect, useState } from "react";
import IdCard from "./IdCard";
import Search from "./Search";
import "./Card.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllCharacters } from "../Services/userAPI";
//import PaginatedItems from "../Pagination/PaginatedItems"
import ReactPaginate from "react-paginate";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const { info, results } = characters;
  const [filterCharacters, setfilterCharacters] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    async function getCharacters() {
      const data = await fetchAllCharacters(`?page=${currentPage}`);
      setCharacters(data.results);
      setPageCount(data.info.pages);
    }
    getCharacters();
  }, [currentPage]);

  const getFilter = (value) => {
    setfilterCharacters(value);
  };
  console.log("Izlaz1", characters);
  console.log("Page", currentPage);

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected);
    
  };

  return (
    <>
      <Search characters={characters} getFilter={getFilter} />

      <div className="container cards">
        <div className="row justify-content-center">
          <div className="col-12">
            {filterCharacters.length > 0 &&
              filterCharacters.map((characters) => (
                <IdCard
                  content={characters}
                  id={characters.id}
                  key={characters.id}
                />
              ))}

            {characters &&
              filterCharacters.length === 0 &&
              characters.map((characters) => (
                <IdCard
                  content={characters}
                  id={characters.id}
                  key={characters.id}
                />
              ))}
          </div>
        </div>
      </div>
      
      <div className="pagination">
        <ReactPaginate
          pageCount={pageCount}
          pageRange={2}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"container"}
          previousLinkClassName={"page"}
          breakClassName={"page"}
          nextLinkClassName={"page"}
          pageClassName={"page"}
          disabledClassNae={"disabled"}
          activeClassName={"active"}
        />
      </div>
   </>
  );
};

export default Cards;
