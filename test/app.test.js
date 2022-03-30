const request = require('supertest');
let server;

describe('GET /', () => {
    beforeEach(()=> { server  = require('../app');});
    afterEach(()=>{ server.close();});

    it('Should return Hello World', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200);
    });
});