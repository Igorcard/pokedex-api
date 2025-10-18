'use strict'

import { Validator } from 'jsonschema'

const validator = new Validator()

export async function checkSchema(input, schema) {
  const { errors = [] } = validator.validate(input, schema)
  return sanitizeErrors(errors)
}

function sanitizeErrors(errors) {
  return errors
    .map(e => e.stack)
    .join(' | ')
}