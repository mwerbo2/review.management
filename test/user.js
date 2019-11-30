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
    it('Should update user email /api/users/id', (done) => {
        chai.request(app)
        .put('http://localhost:5000/api/users/3').send({
            "email": "Testing"
        })
        .end((err, res) => {
            res.should.have.status(200)
            done()
        })
    })
    it('Should delete user /api/users/id', (done) => {
        chai.request(app)
        .delete('http://localhost:5000/api/users/3')
        .end((err, res) => {
            res.should.have.status(200)
            done()
        })
    })
})