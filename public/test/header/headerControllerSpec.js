describe("HeaderController", function () {
    var headerController,
        $rootScope,
        $location,
        $cookies,
        $scope;

    function SetUpScope(_$rootScope_,_$controller_,_$location_, _$cookies_) {
        $location = _$location_;
        $rootScope = _$rootScope_;
        $cookies = _$cookies_;
        $scope = $rootScope.$new();

        headerController = _$controller_('headerController', {
            $scope:$scope
        });
    }

    beforeEach(module('header'));
    beforeEach(inject(SetUpScope));

    describe('logout', function(){
        it('should redirect to the base route and remove the cookie', function(){
            var cookiesRemoveSpy = spyOn($cookies, 'remove');
            var locationUrlSpy = spyOn($location, 'url');

            headerController.logout();

            expect(locationUrlSpy).toHaveBeenCalledWith('/');
            expect(cookiesRemoveSpy).toHaveBeenCalledWith('userId');
        });
    });
});
