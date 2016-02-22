var request = require("request");

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
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('loadUserData', function(){
    it('should respond successfully', function(done){
        request.post('http://localhost:3000/loadUserData', function(error, response, body){
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('updateUser', function(){
    it('should respond successfully', function(done){
        request.post('http://localhost:3000/updateUser', function(error, response, body){
            expect(response.statusCode).toBe(500);
            expect(response.body).toBe('"user update failed"');
            done();
        });
    });
});
