'use strict'

export const get = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  properties: {
    nome: {
      type: 'string'
    },
    tipo: {
      type: 'integer'
    }
  },
  additionalProperties: false
}