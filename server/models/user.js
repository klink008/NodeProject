/**
 * Created by robertlazarony on 11/13/15.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    username: 'string',
    password: 'string',
    email: 'string'
});