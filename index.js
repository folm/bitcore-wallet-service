var BWS = {};

BWS.ExpressApp = require('./lib/expressapp');
BWS.Storage = require('./lib/storage');

require('ssl-root-cas').inject();

module.exports = BWS;
