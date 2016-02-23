var mongoose = require('mongoose');
var request = require("request");
var Post = require('../server/models/post');
var Factory = require('../server/models/modelFactory');

var testPost = null;

describe('Testing the Post Controller', function(){
    beforeEach(function(done){
        if(mongoose.connection.db){
            return done();
        } else {
            mongoose.connect('mongodb://localhost:27017/dbTest', done);
        }
    });

    afterEach(function(done){
        mongoose.connection.db.dropDatabase(function(){
            mongoose.connection.close(done)
        });
    });

    describe('submitPost', function(){
        it('should response with an error when no post information is provided', function(done){
            request.post('http://localhost:3000/submitPost', function(error, response, body){
                expect(response.statusCode).toBe(500);
                expect(response.body).toBe('"No information in request."');
                done();
            });
        });

        it('should save the post successfully', function(){
            var testPost = null;
            Factory.create('post',{reply: undefined}, function(post){
                testPost = post;
                Factory.create('user', {post: post, reply: undefined}, function(){
                    var testParams = {
                        title: testPost.title,
                        content: testPost.content,
                        created: testPost.created
                    };

                    request.post('http://localhost:3000/submitPost', testParams, function(error, response, body){
                        expect(response.statusCode).toBe(200);
                    });

                    Post.list({},function(error,list){
                        expect(list.length).toBe(1);
                        expect(list[0].title).toBe('Test Title');
                        expect(list[0].content).toBe('Test Content');
                        expect(list[0].created).toBe(new Date(10000));
                        expect(list[0].reply).toBe(undefined);
                        done();
                    });
                })
            });
        });
    });

    describe('retrievePost', function(){
        it('should respond with an error when no post is found', function(done){
            request.post('http://localhost:3000/retrievePost', function(error, response, body){
                expect(response.statusCode).toBe(500);
                expect(response.body).toBe('"Could not find post."');
                done();
            });
        });
    });

    describe('retrieveAllPosts', function(){
        it('should respond successfully', function(done){
            request.post('http://localhost:3000/retrieveAllPosts', function(error, response, body){
                expect(response.statusCode).toBe(500);
                expect(response.body).toBe('"Could process all posts request."');
                done();
            });
        });
    });

    describe('retrievePostsForUser', function(){
        it('should respond successfully', function(done){
            request.post('http://localhost:3000/retrievePostsForUser', function(error, response, body){
                expect(response.statusCode).toBe(500);
                expect(response.body).toBe('"Could not find posts for given user."');
                done();
            });
        });
    });
});
