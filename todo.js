var app = angular.module("todo", [])

app.controller("controlTodo", function($scope){
  $scope.todos = ["Learn HTML", "Learn CSS", "Learn JS"]

  $scope.addTodo = function(){
    $scope.todos.push($scope.inputType)
  }
})