import { ErrorRequestHandler } from 'express';

/**
 * A Error Type
 * @typedef {object} Error
 * @property {number} statusCode
 * @property {string} msg
 */

interface Error {
    statusCode: number;
    msg: string;
}

const errorList: { [key: string]: Error } = {
    INTERNAL_SERVER_ERROR: {
        statusCode: 500,
        msg: 'Internal Server Error',
    },
    NOT_FOUND: {
        statusCode: 404,
        msg: 'Not Found',
    },
};

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    const errorMessage: string =
        err.message in errorList ? err.message : 'INTERNAL_SERVER_ERROR';
    const error: Error = errorList[errorMessage];
    res.status(error.statusCode).json({ msg: error.msg });
};

export default errorHandler;
