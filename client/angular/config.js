var app = angular.module('app', [
	'ngRoute'
	]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/landing_page.html'
    })
});
