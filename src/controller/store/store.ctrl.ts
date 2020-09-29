import { RequestHandler } from 'express';
import joi from 'joi';

import Store from '../../model/Store';

const numberScheme = joi.number();

/**
 * A Store Type
 * @typedef {object} StoreList
 * @property {number} id
 * @property {string} name
 * @property {string} category
 * @property {number} averageRating
 */

/**
 * GET /api/store/list
 * @summary get list of store
 * @tags Store
 * @return {array<StoreList>} 200 - Success response - application/json
 */
export const getStoreList: RequestHandler = async (_req, res, next) => {
    try {
        const storeList = await Store.find({
            where: {
                enabled: true,
            },
            select: ['id', 'name', 'category', 'averageRating'],
        });
        res.json(storeList);
    } catch (err) {
        next(err);
    }
};

/**
 * GET /api/store/detail/{storeId}
 * @summary get detail of store
 * @tags Store
 * @param {number} storeId.path.required - Id of store which want to get detail
 * @return {Store} 200 - Success response - application/json
 * @return {Error} 404 - Invalid Parameter
 */
export const getStoreDetail: RequestHandler = async (req, res, next) => {
    const { error, value } = await numberScheme.validate(req.query.storeId);

    try {
        if (error) throw new Error('INVALID_PARAMETER');

        const storeId = value;

        const store = await Store.findOne({
            id: storeId,
            enabled: true,
        });

        res.json(store);
    } catch (err) {
        next(err);
    }
};
