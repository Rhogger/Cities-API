import express from 'express';
import CityController from '../controllers/cityController';

const cityRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: City
 *   description: Operações relacionadas às cidades
 */

/**
 * @swagger
 * api/city:
 *   get:
 *     summary: Obtém todas as cidades por UF e Sigla do País
 *     tags: [City]
 *     responses:
 *       '200':
 *         description: Lista de todas as cidades
 *       '500':
 *         description: Erro interno do servidor
 */
cityRoutes.get('/', CityController.getAll);

/**
 * @swagger
 * api/city/name:
 *   get:
 *     summary: Obtém todas as cidades por nome
 *     tags: [City]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome da cidade a ser pesquisado
 *     responses:
 *       '200':
 *         description: Lista de cidades encontradas por nome
 *       '500':
 *         description: Erro interno do servidor
 */
cityRoutes.get('/name', CityController.getAllByName);

export default cityRoutes;
