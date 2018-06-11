const core = require('./../../core');

const getProfile = (req, res) => {
    core.stores.user.getUser().then(user => {
        return res.Ok(user);
    }, err => {
        return res.Error(err, 500);
    });
}

module.exports = {
    getProfile
}