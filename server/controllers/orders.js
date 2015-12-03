var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		show:function(req, res) {
			Order.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				};
			});
		},
		add: function(req, res) {
			req.body.created_at = new Date();
			Order.create(req.body, function (err, results){
				if(err){
					console.log('something went wrong');
				} else {
					// Product.findOne({name: req.body.product}, function (err, result){
					// 	if(result.quantity - req.body.quantity >= 0){
					// 		Product.update({name: req.body.product}, {quantity: (result.quantity - req.body.quantity)}, function(err, success){
					// 			console.log(success)
					// 			res.json(results)
					// 		})
					// 	} else{
					// 		var errors= {errors: "Product is out of stock!"};
							res.json(results);
					// 	}
					// })
					// console.log(results)
				};
			});
		}
	};
})();