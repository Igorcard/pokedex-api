import mongoose from 'mongoose'

const TiposSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
    unique: true
  },
  nome: {
    type: String,
    required: true
  }
})

export const Tipos = mongoose.model('tipos', TiposSchema)