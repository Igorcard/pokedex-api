'use strict'

import { checkSchema } from '../../helpers/validators-helper.js'
import { AppError } from '../../helpers/result-helper.js'
import * as tiposRepository from '../../repository/tipos/tipos-repository.js'
import * as pokemonsService from '../../services/pokemons/pokemons-service.js'

export async function get(req, res) {
  const { query } = req
  const { nome, codigo } = query
  let tipos 
  try {
    tipos = await tiposRepository.findTipos(nome,codigo)

    if (!tipos) {
      const message = 'Não foram encontrados tipos'
      throw new AppError(message, 404)
    }
  } catch (error) {
    const message = error.message
    throw new AppError(message, 500)  
  }

  return { tipos }
}

export async function deleteById(req, res) {
  const { params } = req
  const id = params.id

  if (!id) {
    const message = "Esquema inválido, [id] não foi provido"
    throw new AppError(message, 400)
  }

  params.query = { tipo : id}
  const pokemons = await pokemonsService.get(params, res)
  if (pokemons.pokemons.length > 0) {
    const message = `Há pokemons com o [id]: ${id} cadastrado`
    throw new AppError(message, 400)
  }

  try {
    await tiposRepository.deleteById(id)
  } catch (error) {
    const message = error.message
    throw new AppError(message, 500) 
  }

  return { message : 'Deletado com sucesso!'}
}

export async function updateById(req, res) {
  const { params, body } = req
  const codigo = params.id
  const nome = body.nome

  if (!nome) {
    const message = "Esquema inválido, [nome] não foi provido"
    throw new AppError(message, 400)
  }

  if (!codigo) {
    const message = "Esquema inválido, [id] não foi provido"
    throw new AppError(message, 400)
  }

  let tipo
  try {
    tipo = await tiposRepository.updateById(codigo, nome)
  } catch (error) {
    const message = error.message
    throw new AppError(message, 500) 
  }

  return { tipo }
}

export async function create(req, res) {
  const { body } = req

  if (!body.nome) {
    const message = "Esquema inválido, [nome] não foi provido"
    throw new AppError(message, 400)
  }

  let tipo
  try {
    tipo = await tiposRepository.create(body)
  } catch (error) {
    const message = error.message
    throw new AppError(message, 500)
  }

  return { tipo }
}