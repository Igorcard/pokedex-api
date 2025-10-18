'use strict'

import { Tipos } from '../../models/tipos.js'

export async function findTipos(params){
  const tipos = await Tipos.find({ params });
  return tipos
}