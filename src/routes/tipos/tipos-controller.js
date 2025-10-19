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

export async function create(req, res) {
  try {
    const tipo = await tiposService.create(req,res)
    return ok(res, tipo)
  } catch (error) {
    console.log(`Error creating tipo. Error: ${JSON.stringify(error.message)}`)
    return error
  }
}

export async function deleteById(req, res) {
  try {
    const tipos = await tiposService.deleteById(req,res)
    return ok(res, tipos)
  } catch (error) {
    console.log(`Error retrieving tipos. Error: ${JSON.stringify(error.message)}`)
    return error
  }
}

export async function updateById(req, res) {
  try {
    const tipos = await tiposService.updateById(req,res)
    return ok(res, tipos)
  } catch (error) {
    console.log(`Error updating tipos. Error: ${JSON.stringify(error.message)}`)
    return error
  }
}