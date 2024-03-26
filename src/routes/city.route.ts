import express from 'express';
import CityController from '../controllers/cityController';

const cityRoutes = express.Router();

cityRoutes.get('/:country_code/:state_code', CityController.getAll);
cityRoutes.get('/:city_name', CityController.getAllByName);

export default cityRoutes;
