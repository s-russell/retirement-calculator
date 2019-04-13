const base = require("./protractor.conf");

const { cucumberOpts } = base.config;
base.config.cucumberOpts = { ...cucumberOpts, tags: ["@AdHoc"] };

exports.config = { ...base.config };
