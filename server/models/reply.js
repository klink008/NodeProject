var mongoose = require('mongoose');

var replySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    replyContent: String,
    created: Date
});

module.exports = mongoose.model('Reply', replySchema);
