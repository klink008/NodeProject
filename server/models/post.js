var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: String,
    content: String,
    created: Date,
    reply: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reply'
    }]
});

module.exports = mongoose.model('Post', postSchema);
