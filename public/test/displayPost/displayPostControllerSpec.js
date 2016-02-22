describe("DisplayPostController", function () {
    var displayPostController,
        displayPostService,
        $routeParams,
        $rootScope,
        $scope;

    function SetUpScope(_$rootScope_,_$controller_, _displayPostService_,_$routeParams_) {
        displayPostService = _displayPostService_;
        $routeParams = _$routeParams_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();

        displayPostController = _$controller_('displayPostController', {
            $scope:$scope
        });
    }

    beforeEach(module('displayPost'));
    beforeEach(inject(SetUpScope));

    describe('initialize', function(){
        it('should call retrievePost', function(){
            var retrievePostSpy = spyOn(displayPostController, 'retrievePost');

            displayPostController.initialize();

            expect(retrievePostSpy).toHaveBeenCalled();
        });
    });

    describe('retrievePost', function(){
        it('should call displayPostService.retrievePost and set post', function(){
            var retrievePostSpy = spyOn(displayPostService, 'retrievePost').and.callFake(function(){
                return{
                    then: function(callback){return callback('test')}
                }
            });
            $routeParams.postId = 'postId';

            displayPostController.retrievePost();

            var expectedParams = {
                postId: 'postId'
            };

            expect(retrievePostSpy).toHaveBeenCalledWith(expectedParams);
            expect(displayPostController.post).toBe('test');
        })
    })
});
