const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSChema = new mongoose.Schema({
    local: {
        email: String,
        password: String
    }
});

userSChema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSChema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSChema);