var Factory = require('factory-lady');
var User = require('../models/user');
var Post = require('../models/post');
var Reply = require('../models/reply');

Factory.define('reply', Reply, {
    user: Factory.assoc('user', 'id'),
    replyContent: "Test reply content",
    created: new Date(10000)
});

Factory.define('post', Post, {
    title: 'Test Title',
    content : 'Test Content',
    created : new Date(10000),
    reply   : Factory.assoc('reply', 'id')
});

Factory.define('user', User, {
    firstName: "Test",
    lastName: "User",
    username: "TestUser",
    password: "test123",
    email: "test@test.com",
    post: Factory.assoc('post', 'id'),
    reply: Factory.assoc('reply', 'id')
});

module.exports = Factory;