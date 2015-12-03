app.factory('UserFactory', function($http) {
	var factory = {};
	var users = [];
	var current_user = [];
	var errors;
	factory.getUsers = function(callback) {
		$http.get('/users').success(function(output){
			users = output.json;
			callback(users);
		});
	};
	factory.getSingleUser = function(info, callback) {
		$http.post('/singleUser', info).success(function(output){
			current_user = output[0].user_id;
			document.cookie="user_id="+current_user+";";
			console.log(document.cookie, "goodbye")
			callback(current_user);

		});
	};
	factory.addUser = function(info, callback) {
		var count = 0;
		for(var user in users) {
			if(info.username == users[user].username || info.email == users[user].email)
			{
				count++;
			}
		}
		if(count>0) {
			errors = {message: "Username or email already exists"};
			callback(errors)
		} else {
			$http.post('/addUser', info).success(function (output) {
				users.push({first_name: info.first_name, last_name: info.last_name, username: info.username, email: info.email, password: info.password, created_at: new Date()})
			});
		}
		
	};	
	return factory;
});