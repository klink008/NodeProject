describe("loginService", function () {
    var loginService,
        $rootScope,
        $scope,
        $httpBackend;

    function SetUpScope(_$rootScope_,_$httpBackend_,_loginService_) {
        loginService = _loginService_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

        $scope = $rootScope.$new();
    }

    beforeEach(module("login"));
    beforeEach(inject(SetUpScope));

    describe('validateUser', function(){
        it('should make a call out to createUser', function(){
            var expectedParams = {
                username: 'user',
                password: 'password'
            };
            $httpBackend.expectPOST('/validateUser', expectedParams).respond({});

            loginService.validateUser('user', 'password');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });

    describe('createUser', function(){
        it('should make a call out to createUser', function(){
            var expectedParams = 'test';
            $httpBackend.expectPOST('/createUser', expectedParams).respond({});

            loginService.createUser('test');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });

});