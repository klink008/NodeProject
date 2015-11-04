(function() {
    angular
        .module('app')
        .directive('njDirective', Directive);

    function Directive(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'templates/template.jade'
        }
    }

})();
