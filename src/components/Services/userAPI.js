export const fetchAllCharacters = async (page="1") => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${page}`
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
