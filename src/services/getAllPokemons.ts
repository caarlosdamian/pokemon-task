import axios from 'axios';

export const getAllPokemons = async (url?: string) => {
  try {
    const urlSearch = url ? url : `https://pokeapi.co/api/v2/pokemon/?limit=20`;
    const response = await axios.get(urlSearch);
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
