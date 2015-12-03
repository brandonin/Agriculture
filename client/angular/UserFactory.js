app.factory('UserFactory', function($http) {
	var factory = {};
	var users = [];
	var errors;
	factory.getUsers = function(callback) {
		$http.get('/users').success(function(output){
			users = output;
			callback(users);
		});
	};
	factory.addUser = function(info, callback) {
		var count = 0;
		for(var user in users) {
			if(info.name == users[user].name)
			{
				count++;
			}
		}
		if(count>0) {
			errors = {message: "Username already exists"};
			callback(errors)
		} else {
			$http.post('/addUser', info).success(function (output) {
				users.push({first_name: info.first_name, last_name: info.last_name, username: info.username, email: info.email, password: info.password, created_at: new Date()})
			});
		}
		
	};	
	return factory;
});