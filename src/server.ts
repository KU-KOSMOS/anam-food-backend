import express from 'express';
import morgan from 'morgan';

import { createConnection } from 'typeorm';

import logger, { loggerStream } from './lib/logger';
import activateSwagger from './lib/swagger';

import controller from './controller';
import errorHandler from './lib/errorHandler';

const app = express();
const { NODE_ENV } = process.env;

const morganEnv = NODE_ENV !== 'production' ? 'dev' : 'combined';
app.use(morgan(morganEnv, { stream: loggerStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', controller);
app.use(errorHandler);

const dbInit = async () => {
    try {
        await createConnection();
        logger.info('DB connection established');
    } catch (err) {
        logger.error(`Error occurred during DB connection: ${err}`);
    }
};
dbInit();

activateSwagger(app);

export default app;
