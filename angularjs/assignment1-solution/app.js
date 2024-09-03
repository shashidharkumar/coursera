angular.module('LunchCheck', [])
  .controller('LunchCheckController', ['$scope', function($scope) {
    $scope.countMe = function() {
      if (!$scope.lunchName) {
        $scope.wordCount = 0;
        return;
      }
      $scope.wordCount = $scope.lunchName.split(',').filter(Boolean).length;
	  if ($scope.wordCount > 3) {
        $scope.stateOfBeing = "Too much!";
      }
	  else
	  {
		  $scope.stateOfBeing = "Enjoy!";
	  }
	  
    };
  }]);