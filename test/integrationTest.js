const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
chai.use(chaiHttp);
const should = chai.should();
const expect = chai.expect;


describe('Test route /api/messages ', () => {
    it('Test row insertion', done => {
        chai.request(app)
            .post('/api/messages')
            .send({
                message: "Integration Test"
            })
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body.message).to.deep.equal('Row inserted')
            })
        done();
    })

    it('Test hash validation', done => {
        chai.request(app)
            .get('/api/messages')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body.message).to.deep.equal('Valid Block')
            })
        done();
    })
})