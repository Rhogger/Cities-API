import express from 'express';
import router from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import { specs } from './core/doc/swagger';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
