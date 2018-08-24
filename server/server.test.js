const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

it('should return hello there response', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
        expect(res.body).toInclude({
            error: 'Page not found'
        });
    })
    .end(done);
});

it('should include a user with the name of Satou', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({name: 'Satou', age: 15});
    })
    .end(done);
});