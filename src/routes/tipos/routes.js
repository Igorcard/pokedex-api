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
 * /pkx/tipos:
 *    post:
 *      summary: Create a Pokemon 
 *      description: Create one Pokemon by body content
 *      produces:
 *        - application/json
 *      tags:
 *        - tipos
 *      responses:
 *        '200':
 *          description: Data of Pokemon
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/tipos' 
 *        '400':
 *          description: Bad request
 *        '500':
 *          description: Something went wrong
 */
tiposRouter.post('/pkx/tipos', tiposController.create)

/**
 * @openapi
 * /pkx/tipos/{id}:
 *    get:
 *      summary: Delete one Tipo 
 *      description: Delete one Tipo by id
 *      produces:
 *        - application/json
 *      tags:
 *        - tipos
 *      responses:
 *        '200':
 *          description: Deleted Tipo
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
tiposRouter.post('/pkx/tipos/:id', tiposController.deleteById)

/**
 * @openapi
 * /pkx/tipos/{id}:
 *    put:
 *      summary: Update one Tipos 
 *      description: Update one Tipos by id
 *      produces:
 *        - application/json
 *      tags:
 *        - tipos
 *      responses:
 *        '200':
 *          description: Update Tipos
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/tipos'
 *        '400':
 *          description: Bad request
 *        '500':
 *          description: Something went wrong
 */
tiposRouter.put('/pkx/tipos/:id', tiposController.updateById)

/**
 * @openapi
 * components:
 *   schemas:
 *     tipos:
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