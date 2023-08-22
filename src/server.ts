import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger_output.json';

const app = express();

app.use(express.json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
