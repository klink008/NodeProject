var mongoose = require('mongoose');

var replySchema = mongoose.Schema({
    replyContent: String,
    created: Date
});

module.exports = mongoose.model('Reply', replySchema);
