process.env.NODE_ENV = 'test';
require('babel-core/register');
require('babel-polyfill');

//let chai = require('chai');
//let chaiHttp = require('chai-http');
//let server = require('../app');
//let should = chai.should();
//
//chai.use(chaiHttp);
//
//describe('Get all films', () => {
//    it('It should GET all films from database', (done) => {
//        chai.request(server)
//            .get('/api/allFilms')
//            .end((err, res) => {
//                res.should.have.status(200);
//                //res.body.should.be.a('array');
//                //res.body.length.should.be.eql(0);
//                done();
//            });
//    });
//});


var app = require('../app');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('API Tests', function() {
    it('should return version number', function(done) {
        request(app)
            .get('/api/allFilms')
            .end(function(err, res) {
                expect(res.body.version).to.be.ok;
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});

