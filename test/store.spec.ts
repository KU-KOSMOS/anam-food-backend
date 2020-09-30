import chai from 'chai';
import chaiHttp from 'chai-http';

import { createConnection } from 'typeorm';

import server from '../src/server';
import Store from '../src/model/Store';

const dpOption = require('../ormconfig.json');

process.env.NODE_ENV = 'test';

dpOption.logging = false;
const { expect } = chai;

chai.use(chaiHttp);

describe('Stores', () => {
    before(async () => {
        await createConnection(dpOption);
        await Store.insert({
            name: 'Store1',
            category: 'Category1',
            description: 'This is Store 1',
            averageRating: 3.0,
            location: 'location string 1',
            workTime: 'workTime string 1',
            pricingRange: '10000-20000',
            enabled: true,
        });
        await Store.insert({
            name: 'Store2',
            category: 'Category2',
            description: 'This is Store 2',
            averageRating: 4.0,
            location: 'location string 2',
            workTime: 'workTime string 2',
            pricingRange: '5000-26000',
            enabled: true,
        });
    });

    describe('GET /api/store/list', () => {
        it('it should GET list of stores', async () => {
            const res = await chai.request(server).get('/api/store/list');
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('array');
        });
    });
});
