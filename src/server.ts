import express from 'express';
import morgan from 'morgan';

import controller from './controller';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(controller);

export default app;
