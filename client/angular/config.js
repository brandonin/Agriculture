var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/landing_page.html'
    })
    .when('/about',{
        templateUrl: 'partials/about.html'
    })
    .when('/login',{
        templateUrl: 'partials/dashboard.html'
    })
    .when('/register',{
        templateUrl: 'partials/dashboard.html'
    })
});
