angular.module('pupster',[])
	.controller('msgcontroller',['$scope', function($scope){
		$scope.sayit = function(){
			console.log("Zoe, you look lovely today!");
		}
	}]);

	angular.module('pupster',[])
	.controller('msgcontroller',['$scope', function($scope){
		$scope.sayit = function(){
			$scope.greeting = "Hello Zoe!";
		}
		$scope.listit = function(){
			$scope.animals = !$scope.animals;
		}
	}]);

	angular.module('pupster',[])
	.controller('msgcontroller',['$scope', function($scope){
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


