var mysql      = require('mysql');

module.exports = function(app, connectionpool) {
	app.get('/users', function(req,res){
    connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.send({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query('SELECT * FROM user', function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                else {
					res.send(rows);
				}
                connection.release();
				console.log('released');
            });
        }
    });
});
	

	app.post('/singleUser', function(req,res){
    connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.send({
                result: 'error',
                err:    err.code
            });
        } else {
			console.log(req.body.email);
            connection.query('SELECT * FROM user WHERE user.email=?',req.body.email, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                else {
					console.log(rows);
					res.send(rows);
				}
                connection.release();
				console.log('released');
            });
        }
    });
});


	app.post('/addUser', function(req,res){
    connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.send({
                result: 'error',
                err:    err.code
            });
        } else {
			console.log(req.body);
			var query = "INSERT INTO user(??,??,??,??,??) values (?, ?, ?, ?, ?)";
			var table = ["email", "password", "fname", "lname", "address",req.body.email,req.body.password,req.body.first_name,req.body.last_name,"not available"];
			query = mysql.format(query,table);
            connection.query(query, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                connection.release();
            });
        }
    });
});

	app.get('/crowdfunds', function(req,res){
    connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.send({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query('SELECT * FROM c_funding', function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                else {
					res.send(rows);
				}
                connection.release();
				console.log('released');
            });
        }
    });
});


	app.post('/singleFunding', function(req,res){
    connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.send({
                result: 'error',
                err:    err.code
            });
        } else {
			console.log(req.body.email);
            connection.query('SELECT * FROM c_funding WHERE c_funding.c_id=?',req.body.c_id, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                else {
					console.log(rows);
					res.send(rows);
				}
                connection.release();
				console.log('released');
            });
        }
    });
});


	app.post('/addCrowdFunding', function(req,res){
    connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.send({
                result: 'error',
                err:    err.code
            });
        } else {
			console.log(req.body);
            req.body.title = req.body.name1 +" "+ req.body.name2;
			var query = "INSERT INTO c_funding(??,??,??,??,??,??, ??) values (?, ?, ?, ?, ?,?, ?)";
			var table = ["title", "goal", "current_amount", "created", "updated","descrip", "image",req.body.title,req.body.goal,req.body.current_amount,new Date(),new Date(),req.body.description, req.body.image];
			query = mysql.format(query,table);
            connection.query(query, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                connection.release();
            });
        }
    });
});

	app.post('/addFundingAmount', function(req,res){
    connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.send({
                result: 'error',
                err:    err.code
            });
        } else {
			console.log(req.body);
            connection.query("UPDATE c_funding SET c_funding.current_amount=? WHERE c_funding.c_id=?", req.body.amount, req.body.c_id, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                connection.release();
            });
        }
    });
});
}