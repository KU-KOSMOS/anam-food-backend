import { RequestHandler } from 'express';
import joi from 'joi';

const postDataScheme = joi.object({
    data: joi.string(),
})

export const postData: RequestHandler = (req, res, next) => {
    const { error, value } = postDataScheme.validate(req.body);
    try {
        if(error) throw new Error('NOT_FOUND');

        res.json({ data: value });
    } catch (err) {
        next(err);
    }
}