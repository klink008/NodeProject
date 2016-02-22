var express           = require('express'),
    router            = express.Router(),
    usersController   = require('../server/controllers/usersController'),
    postController   = require('../server/controllers/postController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//User routes
router.post('/createUser', usersController.create);
router.post('/validateUser', usersController.validate);
router.post('/loadUserData', usersController.loadUserData);
router.post('/updateUser', usersController.updateUser);

//Post routes
router.post('/submitPost', postController.create);
router.post('/retrievePost', postController.retrievePost);
router.post('/retrieveAllPosts', postController.retrieveAllPosts);
router.post('/retrievePostsForUser', postController.retrievePostsForUser);


module.exports = router;
