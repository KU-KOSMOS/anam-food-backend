import { RequestHandler } from 'express';

export const postData: RequestHandler = (req, res, next) => {
    try {
        res.json({ data: 'hi' });
    } catch (err) {
        next(err);
    }
}