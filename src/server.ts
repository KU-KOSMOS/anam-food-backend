import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './env';

import { createConnection, ConnectionOptions } from 'typeorm';

import logger, { loggerStream } from './lib/logger';
import activateSwagger from './lib/swagger';

import controller from './controller';
import errorHandler from './lib/errorHandler';

const app = express();

const {
    NODE_ENV,
    ORM_HOST,
    ORM_PORT,
    ORM_USERNAME,
    ORM_PASSWORD,
    ORM_DATABASE,
} = process.env;

const dpOption: ConnectionOptions = {
    type: 'postgres',
    host: ORM_HOST,
    port: parseInt(ORM_PORT as string, 10),
    username: ORM_USERNAME,
    password: ORM_PASSWORD,
    database: ORM_DATABASE,
    synchronize: true,
    logging: true,
    entities: ['src/model/**/*.ts'],
};

const morganEnv = NODE_ENV !== 'production' ? 'dev' : 'combined';
app.use(cors());
app.use(morgan(morganEnv, { stream: loggerStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', controller);
app.use(errorHandler);

const dbInit = async () => {
    try {
        await createConnection(dpOption);
        logger.info('DB connection established');
    } catch (err) {
        logger.error(`Error occurred during DB connection: ${err}`);
    }
};
dbInit();

activateSwagger(app);

export default app;
