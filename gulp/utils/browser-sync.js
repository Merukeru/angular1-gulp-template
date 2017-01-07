'use strict';

var browsersync = require("browser-sync");

var bs = {};

bs.config = {
  server: 'bsserver',
  development: {
    https: true,
    server: "./dist"
  },
  production: {
    https: true,
    server: "./dist",
    codeSync: false
  }
};

bs.getServer = function () {
  if (browsersync.has(bs.config.server)) {
    return browsersync.get(bs.config.server);
  }
  return browsersync.create(bs.config.server);
};

module.exports = bs;
