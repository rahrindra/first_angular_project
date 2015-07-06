var myApp = angular.module('myApp', []);

myApp.directive('menuAriary', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'templates/menu.html',
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});

myApp.directive('menuUtilisateur', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'templates/menu-utilisateur.html',
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});


myApp.controller('ageController', function($scope){
	$scope.age = 0;
	$scope.name = "testa";
	$scope.majeurOrMineurText = function(){
        return ($scope.age >= 18) ? "majeur" : "mineur";   
    };
});
