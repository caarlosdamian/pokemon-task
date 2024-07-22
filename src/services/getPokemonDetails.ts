import axios from 'axios';

export const getPokemonDetails = async (id?: string) => {
  try {
    const urlSearch = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await axios.get(urlSearch);
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
