'use strict'

import { Pokemons } from '../../models/pokemons.js'
import { Counters } from '../../models/counters.js'

export async function findPokemons({nome = null, tipo = null, page = 1, limit = 20}){
  const filtros = {}

  if (nome) {
    filtros.nome = { $regex: nome, $options: 'i' };
  }

  if (tipo) {
    filtros.$or = [
      { tipo_primario: tipo },
      { tipo_secundario: tipo }
    ]
  }
  
  const currentPage = Math.max(1, parseInt(page) || 1)
  const itensForPage = Math.max(1, Math.min(100, parseInt(limit) || 20))
  const skip = (currentPage - 1) * itensForPage

  const totalItens = await Pokemons.countDocuments(filtros)
  const totalPages = Math.ceil(totalItens / itensForPage)

  const pokemons = await Pokemons.find(filtros)
    .populate('tipo_primario', 'codigo nome')
    .populate('tipo_secundario', 'codigo nome')
    .sort({ codigo: 1 })
    .skip(skip)
    .limit(itensForPage)
    .lean({ virtuals: true })

  return {
    pokemons,
    pagination: {
      currentPage,
      itensForPage,
      totalItens,
      totalPages
    }
  }
}

export async function deleteById(id){
  const pokemon = await Pokemons.findOneAndDelete({ codigo: id})
  return pokemon 
}

export async function updateById(codigo, payload){
  const pokemon = await Pokemons.findOneAndUpdate(
      { codigo },
      payload,
      { new: true } 
    )

  return pokemon 
}

export async function getNextSequence(name) {
  const ret = await Counters.findOneAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } },
    { 
      returnDocument: "after",
      upsert: true 
    }
  )
  return ret.seq
}

export async function create({nome, tipo_primario, tipo_secundario}){
  const codigo = await getNextSequence("pokemons_codigo");

  const pokemon = await Pokemons.insertOne({
    codigo,
    nome,
    tipo_primario,
    tipo_secundario
  })

  return pokemon
}