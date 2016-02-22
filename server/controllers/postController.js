var _ = require("underscore");
var mongoose = require('mongoose');
var User = require('../models/user');
var Post = require('../models/post');

module.exports.create = function(req, res){
    var post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.created = req.body.created;
    //retrieve the user then save the post to the user object.
    post.save(function(err, postResult){
        User.findOne({'_id': req.body.userId},function(err, userResult){
            if(err) {
                console.log(err);
            } else {
                if(userResult) {
                    userResult.posts.push(postResult._id);
                    userResult.save();
                    res.json(userResult);
                } else {
                    console.log("Failed to save post.");
                    res.status(500).json();
                }
            }
        });
    });
};

module.exports.retrievePostsForUser = function(req, res){
    User.findOne({'_id': req.body.userId}, function(err, userResult){
      if(err){
          console.log(err)
      } else {
          var postIds = [];
          if(userResult) {
              _.each(userResult.posts, function (post) {
                  postIds.push(post.inspect());
              });
              Post.find({'_id': {$in: postIds}}, function (err, postResults) {
                  if (err) {
                      console.log(err)
                  } else {
                      res.json(postResults);
                  }
              })
          } else {
              console.log('Could not find posts.');
              res.status(500).json();
          }
      }
    })
};

module.exports.retrieveAllPosts = function(req, res){
    Post.find({}, function(err, postResults){
        if(err){
            console.log(err);
        } else {
            res.json(postResults);
        }
    });
};

module.exports.retrievePost = function(req,res){
    Post.findOne({'_id': req.body.postId}, function(err, postResult){
        if(err){
            console.log(err)
        } else {
            console.log(postResult);
            res.json(postResult)
        }
    });
};