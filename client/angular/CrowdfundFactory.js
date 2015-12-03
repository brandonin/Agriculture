app.factory('CrowdfundFactory', function($http) {
	var factory = {};
	var crowdfunds = [];
	var errors;
	factory.getCrowdfunds = function(callback) {
		$http.get('/crowdfunds').success(function(output){
			users = output;
			callback(users);
		});
	};
	factory.addCrowdfund = function(info, callback) {
		var count = 0;
		for(var crowdfund in crowdfunds) {
			if(info.name == crowdfunds[crowdfund].name)
			{
				count++;
			}
		}
		if(count>0) {
			errors = {message: "Username already exists"};
			callback(errors)
		} else {
			$http.post('/addCrowdfund', info).success(function (output) {
				crowdfunds.push({name: info.name, description: info.description, created_at: new Date(), updated_at: new Date()})
			});
		}	
	};	
	return factory;
});