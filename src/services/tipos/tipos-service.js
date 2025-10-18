'use strict'

import { checkSchema } from '../../helpers/validators-helper.js'
import { notFound, badRequest, internalServerError } from '../../helpers/result-helper.js'
import * as tiposRepository from '../../repository/tipos/tipos-repository.js'

export async function get(req, res) {
  const { query } = req
  const { nome, codigo } = query
  let tipos 
  try {
    tipos = await tiposRepository.findTipos(nome,codigo)

    if (!tipos) {
      const message = 'Não foram encontrados tipos'
      throw notFound(res, message)
    }
  } catch (error) {
    console.log(error)
    const message = error.message
    throw internalServerError(res, message)  
  }

  return { tipos }
}