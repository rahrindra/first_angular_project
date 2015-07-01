var myApp = angular.module('myApp', []);

myApp.controller('ageController', function($scope){
	$scope.age = 0;
	$scope.name = "testa";
	$scope.majeurOrMineurText = function(){
        return ($scope.age >= 18) ? "majeur" : "mineur";   
    };
});