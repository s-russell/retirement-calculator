const base = require("./protractor.conf");

base.config.cucumberOpts.tags = ["@AdHoc"];

module.exports = base;
