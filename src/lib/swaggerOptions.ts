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
    filesPattern: '../**/*.[ts|js]',
    swaggerUIPath: '/api-docs',
    baseDir: __dirname,
};

export default options;
