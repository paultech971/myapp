const User = require("../models/user");

module.exports = {
	postRegister (req, res, next){
		res.send("POST REGISTER");
	}
}
// method on an object, method is a function that is the property of an object. 
// an object literation, anything inside the object is exporting so that
// it is required in the index routes. 
