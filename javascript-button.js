
angular.module('elements', [])
	.controller('buttoncontroller', ['$scope', function($scope){
		$scope.click = function() {
			alert('Hello Zoe!');
		}
	}])



