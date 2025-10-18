'use strict'

import { Tipos } from '../../models/tipos.js'

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