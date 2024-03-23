import express from 'express';
import CountryController from '../controllers/countryController';

const countryRoutes = express.Router();

countryRoutes.get('/', CountryController.getAll);

export default countryRoutes;
