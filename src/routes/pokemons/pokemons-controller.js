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