(function(){
    'use strict';
    
    angular
        .module('tours.directive',[])

        .directive('upcomingTours', function(){
        return {
            restrict: 'A',
            templateUrl: 'templates/upcoming-tours.html'
        };  
    
})
})();