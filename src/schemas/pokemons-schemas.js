'use strict'

export const createUpdate = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  properties: {
    nome: {
      type: 'string'
    },
    tipo_primario: {
      type: 'integer'
    },
    tipo_secundario: {
      type: 'integer'
    },
  },
  required: ['nome', 'tipo_primario'],
  additionalProperties: false
}