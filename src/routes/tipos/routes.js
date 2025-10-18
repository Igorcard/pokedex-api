'use strict'

import express from 'express'
import * as tiposController from './tipos-controller.js'

const tiposRouter = express.Router()

/**
 * @openapi
 * /pkx/tipos:
 *    get:
 *      summary: Get the list of tipos 
 *      description: Get the list of all registered tipos
 *      produces:
 *        - application/json
 *      tags:
 *        - tipos
 *      responses:
 *        '200':
 *          description: List of tipos
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/tipos'   
 *        '400':
 *          description: Bad request
 *        '500':
 *          description: Something went wrong
 */
tiposRouter.get('/pkx/tipos', tiposController.get)

/**
 * @openapi
 * components:
 *   schemas:
 *     pokemon:
 *        type: object
 *        properties:
 *          codigo:
 *            type: integer
 *            example: 2
 *          nome:
 *            type: string
 *            example: poison
 */
export default tiposRouter