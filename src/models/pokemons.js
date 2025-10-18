import mongoose from 'mongoose'

const PokemonSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
    unique: true
  },
  nome: {
    type: String,
    required: true
  },
  tipo_primario: {
    type: Number,
    required: true
  },
  tipo_secundario: {
    type: Number,
    default: null
  }
})

export const Pokemons = mongoose.model('pokemons', PokemonSchema)