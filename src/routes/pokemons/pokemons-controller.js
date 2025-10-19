'use strict'

import { ok } from '../../helpers/result-helper.js'
import * as pokemonsService from '../../services/pokemons/pokemons-service.js'


export async function get(req, res) {
  try {
    const pokemons = await pokemonsService.get(req,res)
    return ok(res, pokemons)
  } catch (error) {
    console.log(`Error retrieving pokemons. Error: ${JSON.stringify(error.message)}`)
    return error
  }
}

export async function create(req, res) {
  try {
    const pokemon = await pokemonsService.create(req,res)
    return ok(res, pokemon)
  } catch (error) {
    console.log(`Error creating pokemon. Error: ${JSON.stringify(error.message)}`)
    return error
  }
}

export async function deleteById(req, res) {
  try {
    const pokemon = await pokemonsService.deleteById(req,res)
    return ok(res, pokemon)
  } catch (error) {
    console.log(`Error deleting pokemons. Error: ${JSON.stringify(error.message)}`)
    return error
  }
}

export async function updateById(req, res) {
  try {
    const pokemon = await pokemonsService.updateById(req,res)
    return ok(res, pokemon)
  } catch (error) {
    console.log(`Error updating pokemons. Error: ${JSON.stringify(error.message)}`)
    return error
  }
}