module.exports = (function() {
	return {
		show:function(req, res) {
			User.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				};
			});
		},
		add: function(req, res) {
			console.log('inside add');
			req.body.created_at = new Date();
			User.create(req.body, function (err, results){
				if(err){
					console.log('something went wrong');
				} else {
					console.log(results);
					res.json(results);
				};
			});
		},
		remove: function(req, res) {
			console.log(req.params)
			User.remove({name: req.params.name}, function (err, names) {
				res.end();
			});
		}
	};
})();