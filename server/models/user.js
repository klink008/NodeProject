var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
});

module.exports = mongoose.model('User', userSchema);
