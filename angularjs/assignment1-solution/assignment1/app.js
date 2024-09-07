angular.module('LunchCheck', [])
  .controller('LunchCheckController', ['$scope', function($scope) {
    $scope.countMe = function() {
      if (!$scope.lunchName) {
        $scope.wordCount = 0;
		alert("Please enter data first");
		$scope.lunchMessage = "";
        return;
      }
      $scope.wordCount = $scope.lunchName.split(',').filter(Boolean).length;
	  if ($scope.wordCount > 3) {
        $scope.lunchMessage = "Too much dishes you want to order!";
      }
	  else
	  {
		  $scope.lunchMessage = "Enjoy your dishes!";
	  }
	  
    };
  }]);