import mongoose from 'mongoose'

const CountersSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    required: true
  }},
  { _id: false }
)

export const Counters = mongoose.model('counters', CountersSchema)