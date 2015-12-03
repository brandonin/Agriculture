var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/landing_page.html'
    })
    .when('/about',{
        templateUrl: 'partials/about.html'
    })
    .when('/dashboard',{
        templateUrl: 'partials/dashboard.html'
    })
    .when('/new_initiative',{
        templateUrl: 'partials/new_initiative.html'
    })
    .when('/myInitiatives',{
        templateUrl: 'partials/myInitiatives.html'
    })
    
    .when('/maps',{
        templateUrl: 'partials/maps.html'
    })

});
