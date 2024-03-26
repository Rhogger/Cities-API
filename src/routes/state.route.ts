import express from 'express';
import StateController from '../controllers/stateController';

const stateRoutes = express.Router();

stateRoutes.get('/', StateController.reportStateCode);
stateRoutes.get('/:country_code', StateController.getAll);

export default stateRoutes;
