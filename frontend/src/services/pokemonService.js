
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:50900',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPokemons = (params) => {
  return apiClient.get('/pkx/pokemons', { params });
};

export const getTipos = () => {
  return apiClient.get('/pkx/tipos');
};

export const deletePokemon = (id) => {
  return apiClient.delete(`/pkx/pokemons/${id}`);
};

// Add other service calls like createPokemon, updatePokemon as needed
