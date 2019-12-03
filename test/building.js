const express = require('express');
const app = express();
const chai = require('chai');
const chaiHttp = require('chai-http')

//Config chai
chai.use(chaiHttp);
chai.should()

describe('Building', () => {
    it('Should return a building by id', (done) => {
        chai.request(app)
        .get('http://localhost:5000/api/buildings/2')
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done()
        })
    })
})