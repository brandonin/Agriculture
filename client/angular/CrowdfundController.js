app.controller("CrowdfundController", function($scope, CrowdfundFactory) {
	CrowdfundFactory.getCrowdfunds(function (data) {
		$scope.crowdfunds = data;
	});
	$scope.addCrowdfund = function() {
		CrowdfundFactory.addCrowdfund($scope.new_crowdfund, function(errs) {
			if(errs){
				$scope.errors = errs;
			} else {
			// else do the get customers stuff below
			CrowdfundFactory.getCrowdfunds(function (output) {
				$scope.crowdfunds(output);
				$scope.new_crowdfunds = {};
			});
			}
		});
	};
})