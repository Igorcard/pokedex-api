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