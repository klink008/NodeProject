/**
 * Created by robertlazarony on 11/13/15.
 */
var User = require('../models/user');
module.exports.create = function(req, res){
    console.log(req.body);
    var user = new User(req.body);
    user.save();
}