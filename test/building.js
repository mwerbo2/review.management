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

describe('Building', () => {
    it('Should insert a building', (done) => {
        chai.request(app)
        .post('http://localhost:5000/api/buildings').send({
            "name": "test buildign",
            "street_number": "23",
            "street_name": "test"
        })
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done()
        })
    })
})

describe('Building', () => {
    it('Should return a building by id', (done) => {
        chai.request(app)
        .put('http://localhost:5000/api/buildings/2').send({
            "name":"new test"
        })
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done()
        })
    })
})