'use strict'

import express from 'express'
import * as pokemonsController from './pokemons-controller.js'

const pokemonsRouter = express.Router()

/**
 * @openapi
 * /pkx/pokemons:
 *    get:
 *      summary: Get the list of Pokemons 
 *      description: Get the list of all registered Pokemons
 *      produces:
 *        - application/json
 *      tags:
 *        - Pokemons
 *      responses:
 *        '200':
 *          description: List of Pokemons
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/pokemons'   
 *        '400':
 *          description: Bad request
 *        '500':
 *          description: Something went wrong
 */
pokemonsRouter.get('/pkx/pokemons', pokemonsController.get)

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
 *            example: ivysaur
 *          tipo-primario:
 *            type: string
 *            example: grass
 *          tipo-secundario:
 *            type: string
 *            example: poison
 */
export default pokemonsRouter