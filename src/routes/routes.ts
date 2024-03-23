import { Router } from 'express';

import countryRoutes from './country.route';
import stateRoutes from './state.route';
import cityRoutes from './city.route';

const router = Router();

router.use('/country', countryRoutes);
router.use('/state', stateRoutes);
router.use('/city', cityRoutes);

export default router;
