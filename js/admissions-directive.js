(function(){
    'use strict';
    
    angular
        .module('admissions.directive',[])

        .directive('upcomingAdmissions', function(){
    
        return {
            restrict: 'A',
            templateUrl: 'templates/upcoming-admissions.html'
        };
    
    
    
});

})();