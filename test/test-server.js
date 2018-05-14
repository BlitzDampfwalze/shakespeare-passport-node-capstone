const {
    app,
    runServer,
    closeServer
} = require('../server');


var chai = require('chai');
var chaiHttp = require('chai-http');


var recipe = require('../models/recipe.js');
var list = require('../models/list.js');
var should = chai.should();

chai.use(chaiHttp);
describe('shakespeare-passport-node-capstone', function () {
    //    it('Should ', function () {});
    it('should add an entry on POST', function (done) {
        chai.request(app)
            .post('/entry/create')
            .send({
                'entryType': "performed",
                'inputDate': "2015/25/01",
                'inputPlay': "King Lear",
                'inputAuthor': "William Shakespeare",
                'inputRole': "Goneril",
                'inputCo': "Kingman Shakespeare Festival",
                'inputLocation': "Santa Barbara, CA",
                'inputNotes': "With A FORK!",
                'loggedInUserName': "paul.thomp@gmail.com"
            })
            .end(function (err, res) {
                //should.equal(err, null);
                res.should.have.status(201);

                done();
            });
    });
    it('Should Update an entry', function () {
        chai.request(app)
            .update('/entry/:id') //<-------????? Put request to '/entry/:id'
            .then(function (res) {
                res.should.have.status(201);
            })
    });

    it('Should Delete an entry', function () {

        chai.request(app)
            .delete('/entry/:id')
            .then(function (res) {
                res.should.have.status(201);
            })

    });
    it('Should Get All Users entries', function () {

        chai.request(app)
            .getAll('/entry-date/:user') //<-------????? Get request to '/entry-date/:user'
            .then(function (res) {
                res.should.have.status(201);
            })

    });

});
