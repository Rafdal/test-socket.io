const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    user: String,
    socketID: String
});

module.exports = mongoose.model('clients', ClientSchema);