var app = angular.module("myShoppingList", [])

app.controller("myCtrl", function($scope){
    $scope.products = localStorage.getItem("listItem") ? localStorage.getItem("listItem") : []
    console.log("$scope.products= " + $scope.products)
    $scope.addItem = function() {
        if ($scope.nameItem == "" || !$scope.nameItem) {
            $scope.message = "Input not valid"
        }
        else if ($scope.products.indexOf($scope.nameItem) == -1 && $scope !== "") {
            $scope.products.push($scope.nameItem)
            $scope.message = false
            localStorage.setItem("listItem", JSON.stringify($scope.products))
        }
        else $scope.message = "The item is already in your shopping list"
    }

    $scope.removeItem = function($index) {
        $scope.products.splice($index, 1)
        $scope.message = false
        localStorage.setItem("listItem", JSON.stringify($scope.products))
    }
})