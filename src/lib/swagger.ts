import { Express } from 'express';

const options = {
    info: {
        version: '1.0.0',
        title: 'Anam Food Backend APIs',
        description: 'API documentation for Anam Food',
        license: {
            name: 'MIT',
        },
    },
    security: {
        BasicAuth: {
            type: 'http',
            scheme: 'basic',
        },
    },
    filesPattern: '../**/*.ts',
    swaggerUIPath: '/api-docs',
    baseDir: __dirname,
};

const activateSwagger = (app: Express) => {
    // eslint-disable-next-line global-require
    const expressJSDocSwagger = require('express-jsdoc-swagger');
    expressJSDocSwagger(app)(options);
};

export default activateSwagger;
