const core = require('./../../core');

const getUser = () => {
    return new core.promise((resolve, reject) => {
        return resolve({
            id: 1,
            email: 'demo@rootexe.com',
            username: 'root exe'
        });
    });
}

module.exports = {
    getUser
}