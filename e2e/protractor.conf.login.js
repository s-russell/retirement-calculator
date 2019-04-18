const base = require("./protractor.conf");

base.config.cucumberOpts.tags = ["@Login"];

module.exports = base;
