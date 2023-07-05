import React, { useEffect, useState } from "react";
import "./character.scss";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import { fetchCharacters } from "../Services/userAPI";
import { useNavigate } from "react-router-dom";

const CharactersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const characterId = location.state.characterId + "";

  const [character, setCharacter] = useState({});
  const [locationName, setLocationName] = useState("");
  // const [origin, setOrigin] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      const resData = await fetchCharacters(`/${characterId}`);
      setCharacter(resData);
      setLocationName(resData.location.name);
      // setOrigin(resData.origin.name);
    }

    fetchCharacter();
  }, [characterId]);


  return (
    <>
      <Header />

      <div className="container">
        <button
          className="btn back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="material-icons left">arrow_back</i> <span>Back</span>
        </button>
      </div>
      <div className="container">
        <div>
          <h1 className="titleName">{character.name}</h1>

          <img className="col s12" src={character.image} alt=""/>
        </div>
        <div className="left-side">
          {(() => {
            if (character.status === "Dead") {
              return (
                <div className="bg-danger fs-4 status badge">{character.status}</div>
              );
            } else if (character.status === "Alive") {
              return (
                <div className=" bg-success fs-4 status badge">{character.status}</div>
              );
            } else {
              return (
                <div className="bg-secondary fs-4 status badge">
                  {character.status}
                </div>
              );
            }
          })()}
          <p>
            <strong>Gender: </strong>
            {character.gender}
          </p>
          <p>
            <strong>Location: </strong> {locationName}
          </p>
          <p>
            <strong>Origin: </strong>
           {/* {origin} */}
           {character?.origin?.name}
          </p>
          <p>
            <strong>Species: </strong>
            {character.species}
          </p>
        </div>
      </div>
    </>
  );
};

export default CharactersPage;
