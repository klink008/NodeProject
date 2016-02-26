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

    describe('Testing the Post Controller', function(){
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

        describe('submitPost', function(){
            it('should save the post successfully', function (done) {
                Factory.build('post', {reply: undefined}, function (post) {
                    Factory.create('user', {post: post, reply: undefined}, function (user) {
                        var testParam = {
                            title: post.title,
                            content: post.content,
                            created: post.created,
                            userId: user.id
                        };
                        request.post({url: 'http://localhost:3000/submitPost', form: testParam}, function (error, response, body) {
                            Post.find({}, function (error, list) {
                                expect(response.statusCode).toBe(200);
                                expect(list.length).toBe(1);
                                expect(list[0].title).toBe('Test Title');
                                expect(list[0].content).toBe('Test Content');
                                expect(list[0].created.time).toEqual(new Date(10000).time);
                                expect(list[0].reply.length).toEqual(0);
                                done();
                            });
                        });
                    });
                });
            });

            it('should response with an error when invalid userId is submitted', function(done){
                var testParam = {
                    title: "Title",
                    content: "Content",
                    created: new Date(),
                    userId: 123
                };
                request.post({url:'http://localhost:3000/submitPost',form: testParam}, function(error, response, body){
                    expect(response.statusCode).toBe(500);
                    expect(response.body).toBe('"Failed to save post."');
                    done();
                });
            });

            it('should response with an error when no post information is provided', function(done){
                request.post('http://localhost:3000/submitPost', function(error, response, body){
                    expect(response.statusCode).toBe(500);
                    expect(response.body).toBe('"No information in request."');
                    done();
                });
            });
        });

        describe('retrievePostsForUser', function(){
            it('should fail because no user has been created.', function(done){
                mongoose.connection.db.dropCollection('posts', function(err,result) {
                    request.post('http://localhost:3000/retrievePostsForUser', function (error, response, body) {
                        expect(response.statusCode).toBe(500);
                        expect(response.body).toBe('"Could not find posts for given user."');
                        done();
                    });
                });
            });

            it('should fail because no user has been created.', function(done){
                var params = {
                    userId: 123
                };

                mongoose.connection.db.dropCollection('posts', function(err,result) {
                    request.post({url:'http://localhost:3000/retrievePostsForUser',form: params}, function (error, response, body) {
                        expect(response.statusCode).toBe(500);
                        expect(response.body).toBe('"Error on finding user."');
                        done();
                    });
                });
            });

            it('should retrieve the posts for the user', function(done){
                Factory.create('post',{reply: undefined},function(post){
                    Factory.create('user', {post: post, reply: undefined}, function(user){
                        var params = {
                            userId: user.id
                        };

                        request.post({url:'http://localhost:3000/retrievePostsForUser',form: params}, function (error, response, body) {
                            Post.find({}, function (error, list) {
                                expect(response.statusCode).toBe(200);
                                expect(list.length).toBe(1);
                                expect(list[0].title).toBe('Test Title');
                                expect(list[0].content).toBe('Test Content');
                                expect(list[0].created.time).toEqual(new Date(10000).time);
                                expect(list[0].reply.length).toEqual(0);
                                done();
                            });
                        });
                    });
                });
            });
        });

        describe('retrieveAllPosts', function(){
            it('should fail because there are no posts to retrieve', function(done){
                request.post('http://localhost:3000/retrieveAllPosts', function(error, response, body){
                    expect(response.statusCode).toBe(500);
                    expect(response.body).toBe('"Retrieve Posts Failed."');
                    done();
                });
            });

            it('should return all of the posts successfully', function(done){
                Factory.create('post',{reply: undefined},function(){
                    Factory.create('post',{reply: undefined, title: "Test Title 2"}, function(){
                        request.post('http://localhost:3000/retrieveAllPosts', function (error, response, body) {
                            Post.find({}, function (error, list) {
                                expect(response.statusCode).toBe(200);
                                expect(list.length).toBe(2);
                                expect(list[0].title).toBe('Test Title');
                                expect(list[1].title).toBe('Test Title 2');
                                expect(list[0].content).toBe('Test Content');
                                expect(list[0].created.time).toEqual(new Date(10000).time);
                                expect(list[0].reply.length).toEqual(0);
                                done();
                            });
                        });
                    });
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

            it('should retrieve the post successfully', function(done){
                Factory.create('post', {reply: undefined}, function(post){
                    var params = {
                        postId: post.id
                    };
                    request.post({url:'http://localhost:3000/retrievePost', form: params}, function(err, response, body){
                        Post.find({}, function (error, list) {
                            expect(response.statusCode).toBe(200);
                            expect(list.length).toBe(1);
                            expect(list[0].title).toBe('Test Title');
                            expect(list[0].content).toBe('Test Content');
                            expect(list[0].created.time).toEqual(new Date(10000).time);
                            expect(list[0].reply.length).toEqual(0);
                            done();
                        });
                    });
                });
            });
        });
    });

    var _finishCallback = jasmine.Runner.prototype.finishCallback;
    jasmine.Runner.prototype.finishCallback = function () {
        // Run the old finishCallback
        _finishCallback.bind(this)();

        mongoose.connection.close();
    };
})();
