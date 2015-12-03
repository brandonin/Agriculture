app.factory('CrowdfundFactory', function($http) {
	var factory = {};
	var crowdfunds = [];
	var errors, goal = false;
	factory.getCrowdfunds = function(callback) {
		$http.get('/crowdfunds').success(function(output){
			console.log(output)
			users = output;
			callback(users);
		});
	};
	factory.addCrowdfund = function(info, callback) {
		if(info.name2 == "seed") {
			info.image = "https://bbbseed.com/wp-content/uploads/2014/07/07.20.15-seeds.jpg"
		} else if(info.name2 == "Equipment"){ 
			info.image = "https://www.deere.com/common/media/images/product/tractors/row_crop_tractors/small_frame_series/7330/7330_tractor_459893_model_642x462.png"
		} else if(info.name2 == "Nursery"){ 
			info.image = "https://upload.wikimedia.org/wikipedia/commons/f/f5/Plant_nursery,_pot_rows.jpg"
		} else if(info.name2 == "Fertilizer"){ 
			info.image = "http://www.smithfarmsupply.com/images/fatima-fertilizer.png"
		} else if(info.name2 == "Chemical"){ 
			info.image = "http://agrodaily.com/wp-content/uploads/2015/11/DuPont-logo.jpg"
		}
		$http.post('/addCrowdFunding', info).success(function (output) {
			crowdfunds.push({name: info.title, goal: info.goal, image: info.image, description: info.description, created_at: new Date(), updated_at: new Date()})
		});
	}	
	factory.crowdfund_option = function (info, callback) {
		console.log(info)
		if (info.name2 == "Equipment")
		{
			goal = true;
			callback(goal);
		} else {
			goal = false;
			callback(goal);
		}
	}
	return factory;
});