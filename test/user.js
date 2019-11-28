const express = require('express')
const app = express();
const chai = require('chai')
const chaiHttp = require('chai-http')

// Config chai
chai.use(chaiHttp);
chai.should()

describe('User', () => {
    it("Should return all the users", (done) => {
        chai.request(app)
        .get('http://localhost:5000/api/users')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done()
        })
    })
    it('Should post to /api/users', (done) => {
        chai.request(app)
        .post('http://localhost:5000/api/users').send({
            "first_name": "first",
            "last_name": "last",
            "email": "tester@gmail.com",
            "avatar": "No avatar"
        })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        })
    })
})