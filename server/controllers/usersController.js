var mongoose = require('mongoose');
var User = require('../models/user');

module.exports.create = function(req, res){
    console.log(req.body);
    var user = new User(req.body);
    //save the user to db then return the data to the client
    user.save(function(err, result){
        res.json(result);
    });
};

module.exports.validate = function(req, res){
    User.findOne({'username': req.body.username},function(err, result){
        if(err){
            res.status(500).json('Incorrect Username')
        }
        if(result) {
            if (result.password === req.body.password) {
                res.status(200).json({id: result._id});
            } else {
                res.status(401).json();
            }
        } else {
            res.status(500).json('Incorrect Username')
        }
    });
};

module.exports.loadUserData = function(req, res){
    User.findOne({'_id': req.body.id}, function(err, result){
        if(err) {
            res.status(500).json('Incorrect User Id')
        }
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(500).json('Couldnt find user');
        }
    });
};

module.exports.updateUser = function(req, res){
    console.log(req.body);
    User.findOne({'_id':req.body.id}, function(err, user){
        if(err){
            res.status(500).json('Incorrect User Id');
        }
        if(user && req.body) {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.username = req.body.username;
            user.email = req.body.email;
            user.password = req.body.password;
            user.save();
            res.status(200).json(user);
        } else {
            res.status(500).json('Couldnt find user');
        }
    });
};