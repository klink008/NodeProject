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
      if(result.password === req.body.password){
          res.status(200).json({id: result._id});
      } else {
          console.log('========== password incorrect ============');
          res.status(401).json();
      }
    });
};

module.exports.loadUserData = function(req, res){
    User.findOne({'_id': req.body.id}, function(err, result){
        if(err) {
            console.log(err);
        }
        console.log(result);
        res.status(200).json(result);
    });
};

module.exports.updateUser = function(req, res){
    console.log(req.body);
    User.findOne({'_id':req.body.id}, function(err, user){
        if(err){
            console.log(err);
            res.status(500);
        }
        if(user) {
            if(req.body.firstName) {
                user.firstName = req.body.firstName;
            } else {
                res.status(500).json("Invalid: Must submit first name");
            }
            user.lastName = req.body.lastName;
            user.username = req.body.username;
            user.email = req.body.email;
            user.password = req.body.password;
            user.save();
            console.log(user);
            console.log('user updated succesfully');
            res.status(200).json(user);
        } else {
            console.log('user update failed');
            res.status(500).json('user update failed');
        }
    });
};