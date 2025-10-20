import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:50900',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getPokemons = (params) => {
  return apiClient.get('/pkx/pokemons', { params })
}

export const getTipos = () => {
  return apiClient.get('/pkx/tipos')
}

export const deletePokemon = (id) => {
  return apiClient.post(`/pkx/pokemons/${id}`)
}

export const createPokemon = (pokemon) => {
  return apiClient.post('/pkx/pokemons', pokemon)
}

export const updatePokemon = (id, pokemon) => {
  return apiClient.put(`/pkx/pokemons/${id}`, pokemon)
}

export const createTipo = (tipo) => {
  return apiClient.post('/pkx/tipos', tipo)
}

export const deleteTipo = (id) => {
  return apiClient.post(`/pkx/tipos/${id}`)
}

export const updateTipo = (id, tipo) => {
  return apiClient.put(`/pkx/tipos/${id}`, tipo)
}