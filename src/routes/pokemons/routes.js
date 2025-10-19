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
 * /pkx/pokemons:
 *    post:
 *      summary: Create a Pokemon 
 *      description: Create one Pokemon by body content
 *      produces:
 *        - application/json
 *      tags:
 *        - Pokemons
 *      responses:
 *        '200':
 *          description: Data of Pokemon
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/pokemons' 
 *        '400':
 *          description: Bad request
 *        '500':
 *          description: Something went wrong
 */
pokemonsRouter.post('/pkx/pokemons', pokemonsController.create)

/**
 * @openapi
 * /pkx/pokemons/{id}:
 *    post:
 *      summary: Delete one Pokemon 
 *      description: Delete one Pokemon by id
 *      produces:
 *        - application/json
 *      tags:
 *        - Pokemons
 *      responses:
 *        '200':
 *          description: Deleted Pokemon
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: delete succesfull
 *        '400':
 *          description: Bad request
 *        '500':
 *          description: Something went wrong
 */
pokemonsRouter.post('/pkx/pokemons/:id', pokemonsController.deleteById)

/**
 * @openapi
 * /pkx/pokemons/{id}:
 *    put:
 *      summary: Update one Pokemon 
 *      description: Update one Pokemon by id
 *      produces:
 *        - application/json
 *      tags:
 *        - Pokemons
 *      responses:
 *        '200':
 *          description: Update Pokemon
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/pokemons'
 *        '400':
 *          description: Bad request
 *        '500':
 *          description: Something went wrong
 */
pokemonsRouter.put('/pkx/pokemons/:id', pokemonsController.updateById)

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