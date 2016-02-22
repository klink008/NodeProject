/**
 * Created by klink on 11/22/2015.
 */
describe("UserModalController", function () {
    var userModalController,
        userModalService,
        $rootScope,
        $cookies,
        $scope;

    function SetUpScope(_$rootScope_,_$controller_, _userModalService_,_$cookies_) {
        userModalService = _userModalService_;
        $rootScope = _$rootScope_;
        $cookies = _$cookies_;
        $scope = $rootScope.$new();

        userModalController = _$controller_('userModalController', {
            $scope:$scope
        });
    }

    beforeEach(module('userModal'));
    beforeEach(inject(SetUpScope));

    describe('initUserModalController', function(){
        it('should call userModalServer.loadUserData', function(){
            var expectedReturn = {
                firstName: 'firstName',
                lastName: 'lastName',
                username: 'username',
                email: 'email',
                password: 'password'
            };
            var loadUserDataSpy = spyOn(userModalService, 'loadUserData').and.callFake(function(){
                return{
                    then: function(callback){return callback(expectedReturn)}
                }
            });
            var cookiesSpy = spyOn($cookies, 'get').and.returnValue('test');

            userModalController.initUserModalController();

            expect(cookiesSpy).toHaveBeenCalledWith('userId');
            expect(loadUserDataSpy).toHaveBeenCalledWith({id: 'test'});
            expect(userModalController.firstName).toBe('firstName');
            expect(userModalController.lastName).toBe('lastName');
            expect(userModalController.username).toBe('username');
            expect(userModalController.email).toBe('email');
            expect(userModalController.password).toBe('password');
        });
    });

    describe('updateAccount', function(){
        it('should call userModalService.updateUser', function(){
            var updateUserSpy = spyOn(userModalService, 'updateUser').and.callFake(function() {
                return{
                    then: function (callback) {
                        return callback()
                    }
                }
            });
            var cookiesSpy = spyOn($cookies, 'get').and.returnValue('test');

            userModalController.firstName = 'firstName';
            userModalController.lastName = 'lastName';
            userModalController.username = 'username';
            userModalController.email = 'email';
            userModalController.password = 'password';

            userModalController.updateAccount();

            var expectedParams = {
                id: 'test',
                firstName: 'firstName',
                lastName: 'lastName',
                username: 'username',
                email: 'email',
                password: 'password'
            };

            expect(updateUserSpy).toHaveBeenCalledWith(expectedParams);
            expect(cookiesSpy).toHaveBeenCalledWith('userId');
        })
    })

});
