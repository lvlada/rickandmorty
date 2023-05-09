import React, { useEffect, useState } from "react";
import "./character.scss";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import { fetchCharacters } from "../Services/userAPI";
import { useNavigate } from "react-router-dom";

const CharactersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const characterId = location.state.characterId + '';

  const [character, setCharacter] = useState({});
  const [locationName, setLocationName] = useState('');
  const [origin, setOrigin] = useState('')


  useEffect(() => {
    async function fetchCharacter() {
      const resData = await fetchCharacters(`/${characterId}`);
      setCharacter(resData);
      setLocationName(resData.location.name);
      setOrigin(resData.origin.name);
    }

    fetchCharacter();
  }, []);

  const location1 = Object.values(character);
  console.log('Object', character)
  // const origin = Object.values(character['origin']);

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

          <img className="col s12" src={character.image} alt="No Image" />
        </div>
        <div className="left-side">
          <h3 className="status">{character.status}</h3>
          <p>
            <strong>Gender: </strong>
            {character.gender}
          </p>
          <p>
            <strong>Location: </strong> {locationName}
          </p>
          <p>
            <strong>Origin: </strong>
            {origin}
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