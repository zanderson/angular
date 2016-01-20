

		angular.module('paragraph',[])
	.controller('paragraphcontroller',['$scope', function($scope){
		$scope.sayit = function(){
			$scope.greeting = "Hello Zoe!";
		}
		$scope.listit = function(){
			$scope.animals = ['Yoda', 'Dexter', 'Frodo', 'Vilmos'];
		}
	 	$scope.exclamation = function(){
	 		$scope.addmark = "!";
	 	}
	
	}]);

