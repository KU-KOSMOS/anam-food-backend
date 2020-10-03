import server from './app';
import logger from './lib/logger';

import 'reflect-metadata';

const port = 3000;

server.listen(port, () => {
    logger.info(`Server listening on ${port}`);
});
