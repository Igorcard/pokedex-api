'use strict'

import { checkSchema } from '../../helpers/validators-helper.js'
import { notFound, badRequest, internalServerError } from '../../helpers/result-helper.js'
import * as pokemonsSchemas from '../../schemas/pokemons-schemas.js'
import * as pokemonsRepository from '../../repository/pokemons/pokemons-repository.js'
import * as tiposRepository from '../../repository/tipos/tipos-repository.js'

export async function get(req, res) {
  const { query } = req

  let pokemons 
  try {
    pokemons = await pokemonsRepository.findPokemons(query)
    if (!pokemons) {
      const message = 'Não foram encontrados pokemons'
      throw notFound(res, message)
    }
  } catch (error) {
    console.log(error)
    const message = error.message
    throw internalServerError(res, message)  
  }

  let tipos
  try {
    tipos = await tiposRepository.findTipos()
  } catch (error) {
    console.log(error)
    const message = error.message
    throw internalServerError(res, message)
  }

  const buildPokemons = builtPokemons(pokemons, tipos)

  return buildPokemons
}

function builtPokemons({pokemons, pagination}, tipos){
   const formatedPokemons = pokemons.map(pokemon => {
    const tipo_primario = tipos.find(t => t.codigo === pokemon.tipo_primario)
    const tipo_secundario = tipos.find(t => t.codigo === pokemon.tipo_secundario)

    return {
      codigo: pokemon.codigo,
      nome: pokemon.nome,
      tipo_primario: tipo_primario ? tipo_primario.nome : null,
      tipo_secundario: tipo_secundario ? tipo_secundario.nome : null
    }
  })

  return {
    pokemons: formatedPokemons,
    pagination
  }
}

export async function deleteById(req, res) {
  const { params } = req
  const id = params.id

  if (!id) {
    const message = "Esquema inválido, [id] não foi provido"
    throw badRequest(res, message)
  }

  try {
    await pokemonsRepository.deleteById(id)
  } catch (error) {
    console.log(error)
    const message = error.message
    throw internalServerError(res, message)  
  }

  return { message : 'Deletado com sucesso!'}
}

export async function updateById(req, res) {
  const { params, body } = req
  const codigo = params.id
  const payload = body

  const schema = checkSchema(payload, pokemonsSchemas.createUpdate)

  if (schema.length > 0) {
    const message = schema.join(' | ')
    throw badRequest(res, message)
  }

  if (!codigo) {
    const message = "Esquema inválido, [id] não foi provido"
    throw badRequest(res, message)
  }

  await checkTiposPokemon(payload)

  let pokemon
  try {
    pokemon = await pokemonsRepository.updateById(codigo, payload)
  } catch (error) {
    console.log(error)
    const message = error.message
    throw internalServerError(res, message)  
  }

  return { pokemon }
}

export async function create(req, res) {
  const { body } = req
  const payload = body

  const schema = checkSchema(payload, pokemonsSchemas.createUpdate)
  if (schema.length > 0) {
    const message = schema.join(' | ')
    throw badRequest(res, message)
  }

  await checkTiposPokemon(payload)

  let pokemon
  try {
    pokemon = await pokemonsRepository.create(payload)
  } catch (error) {
    console.log(error)
    const message = error.message
    throw internalServerError(res, message)  
  }

  return { pokemon }
}

async function checkTiposPokemon(tipos){
  if (tipos.tipo_primario){
    const tipo = await tiposRepository.findById(tipos.tipo_primario)
    if (!tipo){
      const message = `Tipo para [tipo_primario] : ${tipos.tipo_primario} não foi encontrado`
      throw notFound(res, message)
    }
  }

  if (tipos.tipo_secundario){
    const tipo = await tiposRepository.findById(tipos.tipo_secundario)
    if (!tipo){
      const message = `Tipo para [tipo_secundario] : ${tipos.tipo_secundario} não foi encontrado`
      throw notFound(res, message)
    }
  }
}