'use strict'

import { Pokemons } from '../../models/pokemons.js'

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