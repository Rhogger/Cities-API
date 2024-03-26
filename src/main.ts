import express from 'express';
import router from './routes/routes';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { specs } from './core/doc/swagger';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
