import React, { useEffect, useState } from "react";
import IdCard from "./IdCard";
import Search from "./Search";
import "./Card.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllCharacters } from "../Services/userAPI";
import PaginatedItems from "../Pagination/PaginatedItems"

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const { info, results } = characters;
  const [filterCharacters, setfilterCharacters] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function getCharacters() {
      const data = await fetchAllCharacters(`?page=${pageNumber}`);
      setCharacters(data.results);
    }
    getCharacters();
  }, [pageNumber]);

  const getFilter = (value) => {
    setfilterCharacters(value);
  };
  console.log("Izlaz1", characters);
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
      <PaginatedItems/>
    </>
  );
};

export default Cards;
