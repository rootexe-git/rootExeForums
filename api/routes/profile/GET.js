const core = require('./../../core');

core.app.get('/profile', core.services.user.getProfile);