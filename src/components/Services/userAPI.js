export const fetchAllCharacters = async (page="1") => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${page}`
  );
  const data = await response.json();
  return data;
};

export const fetchAllCharacters2 = async (page, searchName) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchName}`
  );
  const data = await response.json();
  return data;
};

export const fetchCharacters = async (characterId = "") => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  const data = await response.json();
  return data;
};


export const findCharacters = async (characterName = "") => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${characterName}`
  );
  const data = await response.json();
  return data;
};