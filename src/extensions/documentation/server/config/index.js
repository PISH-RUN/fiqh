"use strict";

const defaultDocumentationConfig = require("./config");

const defaultConfig = {
  ...defaultDocumentationConfig,
  session: {
    key: "plugin::documentation.sess",
    maxAge: "session",
    secretKeys: ["mySecret"],
  },
};

module.exports = {
  default: defaultConfig,
};
