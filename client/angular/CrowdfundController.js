app.controller("CrowdfundController", function($scope, CrowdfundFactory) {
	CrowdfundFactory.getCrowdfunds(function (data) {
		$scope.crowdfunds = data;
	});
	$scope.addCrowdfund = function() {
		CrowdfundFactory.addCrowdfund($scope.new_crowdfund, function() {
		
			// else do the get customers stuff below
			CrowdfundFactory.getCrowdfunds(function (output) {
				$scope.crowdfunds(output);
				$scope.new_crowdfunds = {};
			});
			});
		};
	$scope.crowdfund_option= function () {
		CrowdfundFactory.crowdfund_option($scope.new_crowdfund, function(callback) {
			$scope.goal = callback;
		})
	}
	$scope.crowdfund_initiate = function () {
		$scope.crowdfund = true;
		$scope.microfund = false;
	}
	$scope.microfund_initiate = function () {
		$scope.microfund = true;
		$scope.crowdfund = false;
	}
})