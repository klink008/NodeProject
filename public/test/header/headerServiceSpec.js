describe("HeaderService", function () {
    var headerService,
        $rootScope,
        $scope,
        $httpBackend;

    function SetUpScope(_$rootScope_,_$httpBackend_,_headerService_) {
        headerService = _headerService_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

        $scope = $rootScope.$new();
    }

    beforeEach(module("header"));
    beforeEach(inject(SetUpScope));

    describe('validateUser', function(){
        it('should make a call out to createUser', function(){
            var expectedParams = 'id';
            $httpBackend.expectPOST('/loadUserData', expectedParams).respond({});

            headerService.loadUserData('id');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});