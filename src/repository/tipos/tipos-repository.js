'use strict'

import { Tipos } from '../../models/tipos.js'
import * as pokemonsRepository from '../../repository/pokemons/pokemons-repository.js'


export async function findTipos(nome = null, codigo = null){
  const filtros = {}

  if (nome) {
    filtros.nome = { $regex: nome, $options: 'i' };
  }

  if (codigo) {
    filtros.codigo = { $regex: codigo, $options: 'i' };
  }

  const tipos = await Tipos.find(filtros)
      .sort({ codigo: 1 })
      .lean({ virtuals: true })

  return tipos 
}

export async function deleteById(id){
  const tipos = await Tipos.findOneAndDelete({ codigo: id})
  return tipos 
}

export async function findById(id){
  const tipo = await Tipos.findOne({ codigo: id})
  return tipo 
}

export async function updateById(codigo, nome){
  const tipo = await Tipos.findOneAndUpdate(
      { codigo },
      { nome },
      { new: true } 
    )

  return tipo 
}

export async function create({nome}){
  const codigo = await pokemonsRepository.getNextSequence("tipos_codigo");

  const tipo = await Tipos.insertOne({
    codigo,
    nome
  })

  return tipo
}