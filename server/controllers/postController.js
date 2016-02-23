var _ = require("underscore");
var mongoose = require('mongoose');
var User = require('../models/user');
var Post = require('../models/post');

module.exports.submitPost = function(req, res){
    var post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.created = req.body.created;
    //retrieve the user then save the post to the user object.
    if(post.title || post.content) {
        post.save(function (err, postResult) {
            User.findOne({'_id': req.body.userId}, function (err, userResult) {
                if (err) {
                    console.log(err);
                } else {
                    if (userResult) {
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
    } else {
        res.status(500).json('No information in request.')
    }
};

module.exports.retrievePostsForUser = function(req, res){
    User.findOne({'_id': req.body.userId}, function(err, userResult){
      if(err){
          console.log(err);
          res.status(500).json("Error on finding user." + err);
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
              res.status(500).json('Could not find posts for given user.');
          }
      }
    })
};

module.exports.retrieveAllPosts = function(req, res){
    Post.find({}, function(err, postResults){
        if(err){
            console.log(err);
        } else {
            if(postResults.length > 0) {
                res.json(postResults);
            } else {
                res.status(500).json('Could process all posts request.')
            }
        }
    });
};

module.exports.retrievePost = function(req,res){
    Post.findOne({'_id': req.body.postId}, function(err, postResult){
        if(err){
            console.log(err)
        } else {
            if(postResult) {
                res.json(postResult)
            } else {
                res.status(500).json('Could not find post.')
            }
        }
    });
};