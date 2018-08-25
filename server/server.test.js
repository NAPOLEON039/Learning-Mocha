const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello there response', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => { //this is the supertest libary's assertion
                expect(res.body).toInclude({ //this is our imported 3rd party expect assertion library
                    error: 'Page not found'
                });
            })
            .end(done);
        });
    });

    describe('GET /user', () => {
        it('should include a user with the name of Satou', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({name: 'Satou', age: 15});
            })
            .end(done);
        });
    });
});