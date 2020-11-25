const request = require('supertest');
const app = require('./../index');

describe('Endpoints:', () => {
    
    it('Suma retorna status 200', (done) => {
        let data = {
            'a': 1,
            'b': 2
        };
        request(app)
            .post('/suma')
            .send(data)
            .set('Accept', 'application/json')
            .expect(200)
            .end(err => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
    it('Suma retorna status 400', (done) => {
        let data = {
            'a': 1,
            'b': "4+ñ"
        };
        request(app)
            .post('/suma')
            .send(data)
            .set('Accept', 'application/json')
            .expect(400)
            .end(err => {
                if (err) {
                    return done(err);
                }
                done();
            })
    })
});
