describe("userModalService", function () {
    var userModalService,
        $rootScope,
        $scope,
        $httpBackend;

    function SetUpScope(_$rootScope_,_$httpBackend_,_userModalService_) {
        userModalService = _userModalService_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

        $scope = $rootScope.$new();
    }

    beforeEach(module("userModal"));
    beforeEach(inject(SetUpScope));

    describe('loadUserData', function(){
        it('should make a call out to loadUserData',function(){
            var expectedParams = 'id';
            $httpBackend.expectPOST('/loadUserData', expectedParams).respond({});

            userModalService.loadUserData('id');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });

    describe('updateUser', function(){
        it('should make a call out to updateUser',function(){
            var expectedParams = 'params';
            $httpBackend.expectPOST('/updateUser', expectedParams).respond({});

            userModalService.updateUser('params');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});