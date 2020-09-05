import express from 'express';
import morgan from 'morgan';

import { loggerStream } from './lib/logger';

import controller from './controller';

const app = express();
const { NODE_ENV } = process.env;

const morganEnv = NODE_ENV !== 'production' ? 'dev' : 'combined';
app.use(morgan(morganEnv, { stream: loggerStream }));
app.use(express.json());

app.use(controller);

export default app;
