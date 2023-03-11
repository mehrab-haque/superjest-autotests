const supertest = require('supertest');
const { app, server } = require('../app');
const request = supertest(app)

describe("Add route test", () => {
    it('adding 1 + 2 should return 3', async () => {
        const res = await request.get('/add?num1=1&num2=2')
        expect(res.statusCode).toEqual(200)
        expect(res.body.sum).toEqual(3)
    });
})

describe("Add route test new", () => {
    it('adding 2 + 2 should return 4', async () => {
        const res = await request.get('/add?num1=2&num2=2')
        expect(res.statusCode).toEqual(200)
        expect(res.body.sum).toEqual(4)
    });
    it('adding 2 + 3 should return 6', async () => {
        const res = await request.get('/add?num1=2&num2=3')
        expect(res.statusCode).toEqual(200)
        expect(res.body.sum).toEqual(6)
    });
})

afterAll(done => {
    server.close()
    done()
})