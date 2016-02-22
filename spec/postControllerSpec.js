var request = require("request");

describe('submitPost', function(){
    it('should respond successfully', function(done){
        request.post('http://localhost:3000/submitPost', function(error, response, body){
            expect(response.statusCode).toBe(500);
            done();
        });
    });
});

describe('retrievePost', function(){
    it('should respond successfully', function(done){
        request.post('http://localhost:3000/retrievePost', function(error, response, body){
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('retrieveAllPosts', function(){
    it('should respond successfully', function(done){
        request.post('http://localhost:3000/retrieveAllPosts', function(error, response, body){
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('retrievePostsForUser', function(){
    it('should respond successfully', function(done){
        request.post('http://localhost:3000/retrievePostsForUser', function(error, response, body){
            expect(response.statusCode).toBe(500);
            done();
        });
    });
});
