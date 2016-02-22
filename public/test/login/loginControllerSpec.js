describe("LoginController", function () {
    var loginController,
        loginService,
        $location,
        $scope,
        $rootScope,
        $cookies;

    function SetUpScope(_$rootScope_,_$controller_, _loginService_,_$location_,_$cookies_) {
        loginService = _loginService_;
        $rootScope = _$rootScope_;
        $location = _$location_;
        $cookies = _$cookies_;
        $scope = $rootScope.$new();

        loginController = _$controller_('loginController', {
            $scope:$scope
        });
    }

    beforeEach(module('login'));
    beforeEach(inject(SetUpScope));

    describe("validateUser", function() {
        it("should call loginService", function() {
            var validateUserSpy = spyOn(loginService, 'validateUser').and.callFake(function(){
                return{
                    then: function(callback){return callback({id: 'test'})}
                }
            });
            var locationSpy = spyOn($location, 'path').and.callThrough();
            var cookiesSpy = spyOn($cookies, 'put');

            loginController.username = 'user';
            loginController.password = 'password';
            loginController.validateUser();

            expect(cookiesSpy).toHaveBeenCalledWith('userId', 'test');
            expect(validateUserSpy).toHaveBeenCalledWith('user','password');
            expect(locationSpy).toHaveBeenCalledWith('/home');
        });
    });

    describe("createUser", function() {
        it("should call loginService", function() {
            var createUserSpy = spyOn(loginService, 'createUser').and.callFake(function(){
                return{
                    then: function(callback){return callback()}
                }
            });
            var locationSpy = spyOn($location, 'path');

            loginController.firstName = 'firstName';
            loginController.lastName = 'lastName';
            loginController.username = 'username';
            loginController.email = 'email';
            loginController.password = 'password';
            loginController.createUser();

            var expectedParams = {
                firstName:  'firstName',
                lastName:   'lastName',
                username:   'username',
                email:      'email',
                password:   'password'
            };

            expect(createUserSpy).toHaveBeenCalledWith(expectedParams);
            expect(locationSpy).toHaveBeenCalledWith('/');
        });
    });
});