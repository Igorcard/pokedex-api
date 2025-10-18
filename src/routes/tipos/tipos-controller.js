'use strict'

import { ok } from '../../helpers/result-helper.js'
import * as tiposService from '../../services/tipos/tipos-service.js'


export async function get(req, res) {
  try {
    const tipos = await tiposService.get(req,res)
    return ok(res, tipos)
  } catch (error) {
    console.log(`Error retrieving tipos. Error: ${JSON.stringify(error.message)}`)
    return error
  }
}