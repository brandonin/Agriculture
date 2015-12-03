var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		show:function(req, res) {
			Product.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				};
			});
		},
		add: function(req, res) {
			req.body.created_at = new Date();
			Product.create(req.body, function (err, results){
				console.log(req.body)
				if(err){
					console.log('something went wrong');
				} else {
					res.json(results);
				};
			});
		}
	};
})();