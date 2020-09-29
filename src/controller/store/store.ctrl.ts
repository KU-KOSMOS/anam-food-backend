import { RequestHandler } from 'express';
import joi from 'joi';

import Store from '../../model/Store';

export const getStoreList: RequestHandler = async (req, res, next) => {
    try {
        const storeList = await Store.find({
            where: {
                enabled: true,
            },
        });
        res.json({ storeList });
    } catch (err) {
        next(err);
    }
};
