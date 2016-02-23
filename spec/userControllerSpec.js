(function(){
    var mongoose = require('mongoose');
    var request = require("request");
    var Post = require('../server/models/post');
    var User = require('../server/models/user');
    var Factory = require('../server/models/modelFactory');

    beforeEach(function(done){
        mongoose.connect('mongodb://localhost:27017/dbTest', done);
        mongoose.connection.db.dropDatabase();
        mongoose.connection.close(done)
    });
    //
    describe('Testing the User Controller', function(){
        beforeEach(function(done){
            mongoose.connect('mongodb://localhost:27017/dbTest', done);
        });

        afterEach(function(done){
            mongoose.connection.db.dropCollection('posts', function(err,result){
                mongoose.connection.db.dropCollection('users', function(err,result){
                    mongoose.connection.close(done);
                });
            });
        });

        describe('createUser', function(){
            it('should respond successfully', function(done){
                request.post('http://localhost:3000/createUser', function(error, response, body){
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });
        });

        describe('validateUser', function(){
            it('should respond successfully', function(done){
                request.post('http://localhost:3000/validateUser', function(error, response, body){
                    expect(response.statusCode).toBe(500);
                    expect(response.body).toBe('"Incorrect Username"');
                    done();
                });
            });
        });

        describe('loadUserData', function(){
            it('should respond successfully', function(done){
                request.post('http://localhost:3000/loadUserData', function(error, response, body){
                    expect(response.statusCode).toBe(500);
                    done();
                });
            });
        });

        describe('updateUser', function(){
            it('should respond successfully', function(done){
                request.post('http://localhost:3000/updateUser', function(error, response, body){
                    expect(response.statusCode).toBe(500);
                    expect(response.body).toBe('"Couldnt find user"');
                    done();
                });
            });
        });
    });
})();
