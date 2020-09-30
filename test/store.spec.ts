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
    });

    describe('GET /api/store/list', () => {
        it('it should GET list of stores', async () => {
            const storeList = [
                {
                    name: 'Store1',
                    category: 'Category1',
                    description: 'This is Store 1',
                    averageRating: 3.0,
                    location: 'location string 1',
                    workTime: 'workTime string 1',
                    pricingRange: '10000-20000',
                    enabled: true,
                },
                {
                    name: 'Store2',
                    category: 'Category2',
                    description: 'This is Store 2',
                    averageRating: 4.0,
                    location: 'location string 2',
                    workTime: 'workTime string 2',
                    pricingRange: '5000-26000',
                    enabled: true,
                },
            ];
            storeList.forEach(async (store) => {
                await Store.insert(store);
            });

            const res = await chai.request(server).get('/api/store/list');

            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('array');
            res.body.forEach((store: Store) => {
                expect(store).to.be.a('object');
                expect(store).to.have.all.keys(
                    'id',
                    'name',
                    'category',
                    'averageRating',
                );
            });
        });
    });

    describe('GET /api/store/detail/:storeId', () => {
        it('it should GET a book by the given storeId', async () => {
            const store = await Store.insert({
                name: 'Store3',
                category: 'Category3',
                description: 'This is Store 3',
                averageRating: 3.5,
                location: 'location string 3',
                workTime: 'workTime string 3',
                pricingRange: '2341-13213',
                enabled: true,
            });

            const res = await chai
                .request(server)
                .get(`/api/store/detail/${store.identifiers[0].id}`);

            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('name');
            expect(res.body).to.have.property('category');
            expect(res.body).to.have.property('description');
            expect(res.body).to.have.property('averageRating');
            expect(res.body).to.have.property('location');
            expect(res.body).to.have.property('workTime');
            expect(res.body).to.have.property('pricingRange');
            expect(res.body).to.have.property('pricingRange');
            expect(res.body)
                .to.have.property('id')
                .to.equal(store.identifiers[0].id);
        });
    });
});
