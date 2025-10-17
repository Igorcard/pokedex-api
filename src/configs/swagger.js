'use strict'

import { exportSwaggerApis } from '../helpers/swagger-helper.js'

const swaggerApis = exportSwaggerApis()

export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.4',
    info: {
      title: 'Pokedex API',
      description: `This API was developed for the Elevantial challenge.`,
      contact: {
        name: 'Igor Cardoso'
      },
      version: '1.0.0',
    },
    server: [
      {
        url: 'http://localhost:50900',
        description: 'Pokedex Api - Local'
      }
    ]
  },

  apis: swaggerApis
}
