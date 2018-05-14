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
    it('Should Delete an ingredient', function () {
        chai.request(app)
            .delete('/deletering/')
            .then(function (res) {
                res.should.have.status(201);
            })
    });

    it('Should Delete all recipes', function () {

        chai.request(app)
            .delete('/deleterec/')
            .then(function (res) {
                res.should.have.status(201);
            })

    });
    it('Should Delete all ingredients', function () {
        const killmsg = {
            id: 'killAll'
        };

        chai.request(app)
            .delete('/deletering/')
            .then(function (res) {
                res.should.have.status(201);
            })

    });

});
