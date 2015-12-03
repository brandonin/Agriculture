var mysql = require('mysql');
var UserSchema = new mysql.table({
 user_id: Number,
 email: String,
 password: String,
 fname: String,
 lname: String,
 address: String,
})
var User = mysql.model('user', UserSchema);