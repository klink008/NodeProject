var express = require('express'),
    usersController = require('../server/controllers/usersController'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/user/create', usersController.create);

module.exports = router;
