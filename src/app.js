import express from 'express'
import logger from 'morgan'
import dotenv from 'dotenv'

import * as routesExport from './routes/routes-export.js'

import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './configs/swagger.js'

import cors from 'cors'

dotenv.config()

var app = express()

app.use(cors())

app.use(logger('dev'))

app.use(
  express.json({
    limit: '20mb'
  })
)

app.use(
  express.urlencoded({
    limit: '20mb',
    parameterLimit: 100000,
    extended: true
  })
)

app.use('/oap/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions)))

routesExport.exportRoutes(app)

export default app