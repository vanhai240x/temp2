var myApp = angular.module("myApp", ["ngRoute", "ngCookies"])

myApp.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "HomeCtrl"
    })
    .when("/login", {
      templateUrl: "login.html",
      controller: "LoginCtrl"
    })
    .when("/register", {
      templateUrl: "register.html",
      controller: "RegisterCtrl"
    })
    .otherwise({ ridirectTo: "/login" })
})

myApp.controller("HomeCtrl", function($scope){
  $scope.mess = "Home page"
})