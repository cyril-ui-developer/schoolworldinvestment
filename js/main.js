(function(){
    'use strict';

    angular
        .module('RhemaWebApp', [
            'ngRoute',
            'tours.directive',
            'admissions.directive',
            'album.controller'
])

/**
 * Configure the Routes
 */
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html"})

  // Pages
  .when("/aboutus", {templateUrl: "partials/aboutus.html"})
  .when("/testimonials", {templateUrl: "partials/testimonials.html"})
  .when("/contact", {templateUrl: "partials/contact.html"})
  .when("/confirmation", {templateUrl: "partials/confirmation.html"})
  .when("/photo-gallery", {templateUrl: "partials/photo-gallery.html"})
  .when("/registration", {templateUrl: "partials/registration.html"})
  .when("/usa", {templateUrl: "partials/tours/usa.html"})
  .when("/canada", {templateUrl: "partials/tours/canada.html"})
  .when("/uk", {templateUrl: "partials/tours/uk.html"})
  .when("/france-tours", {templateUrl: "partials/tours/france.html"})
  .when("/europe", {templateUrl: "partials/tours/europe.html"})
  .when("/canada-colleges", {templateUrl: "partials/colleges/canada.html"})
  .when("/partners", {templateUrl: "partials/partners.html"})
  .when("/china", {templateUrl: "partials/colleges/china.html"})
  .when("/france-colleges", {templateUrl: "partials/colleges/france.html"})
  .otherwise("/404", {templateUrl: "partials/404.html"});
    

}])


})();
