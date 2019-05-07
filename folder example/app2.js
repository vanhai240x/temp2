var app = angular.module("myApp", ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'HomeCtrl',
    templateUrl  : 'home.html'
  }).when('/login', {
    controller: 'LoginCtrl',
    templateUrl  : 'login.html'
  }).when('/register', {
    controller: 'RegisterCtrl',
    templateUrl  : 'register.html'
  }).otherwise({
    redirectTo  : '/login'
  })
})

