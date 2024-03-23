import express from 'express';
import StateController from '../controllers/stateController';

const stateRoutes = express.Router();

stateRoutes.get('/', StateController.getAll);

export default stateRoutes;
