import mongoose from 'mongoose';

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
  tipoPrimario: {
    type: String,
    required: true
  },
  tipoSecundario: {
    type: String
  }
});

export const Pokemon = mongoose.model('Pokemon', PokemonSchema);