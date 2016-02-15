
var app = angular.module('RhemaWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider /*, $locationProvider*/) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  /* Home > Tabs
  .when("/tabdefault", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/tab2default", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/tab4default", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/tab5default", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/carousel-example-generic", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  */
  
  // Pages
  .when("/aboutus", {templateUrl: "partials/aboutus.html", controller: "PageCtrl"})
 // .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
  //.when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
  .when("/testimonials", {templateUrl: "partials/testimonials.html", controller: "PageCtrl"})
  //.when("/event", {templateUrl: "partials/event.html", controller: "PageCtrl"})
  .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
  .when("/confirmation", {templateUrl: "partials/confirmation.html", controller: "PageCtrl"})
 // .when("/community_outreach", {templateUrl: "partials/community_outreach.html", controller: "PageCtrl"})
  .when("/photo-gallery", {templateUrl: "partials/photo-gallery.html", controller: "PageCtrl"})
  .when("/registration", {templateUrl: "partials/registration.html", controller: "PageCtrl"})
  .when("/usa", {templateUrl: "partials/tours/usa.html", controller: "PageCtrl"})
  .when("/canada", {templateUrl: "partials/tours/canada.html", controller: "PageCtrl"})
  .when("/uk", {templateUrl: "partials/tours/uk.html", controller: "PageCtrl"})
  .when("/france-tours", {templateUrl: "partials/tours/france.html", controller: "PageCtrl"})
  .when("/africa", {templateUrl: "partials/tours/africa.html", controller: "PageCtrl"})
  .when("/canada-colleges", {templateUrl: "partials/colleges/canada.html", controller: "PageCtrl"})
  .when("/partners", {templateUrl: "partials/partners.html", controller: "PageCtrl"})
  .when("/china", {templateUrl: "partials/colleges/china.html", controller: "PageCtrl"})
  .when("/france-colleges", {templateUrl: "partials/colleges/france.html", controller: "PageCtrl"})
  .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    

}])
/*.directive("upComing", function(){
        return {
            restrict: 'E',
            templateUrl: 'upcoming.html'
          };
});
*/

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function () {
 
    
    
    // Photo gallery controller
function AlbumCtrl ($scope){
    

    
   $scope.currentImage = _.first($scope.images);
   $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category'));
    
    $scope.setCurrentImage= function (image){
      $scope.currentImage = image;
    };


}

});

