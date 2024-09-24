import axios from 'axios';

export const fetchPokemonList = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
  return response.data.results;
};

export const fetchPokemonDetails = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};