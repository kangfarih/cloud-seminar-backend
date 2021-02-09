const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create User Schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    country: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;