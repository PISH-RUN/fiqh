"use strict";

module.exports = {
  default: ({ env }) => ({
    apiKey: env("GHASEDAK_API_KEY"),
    lineNumber: env("GHASEDAK_LINE_NUMBER"),
  }),
  validator: (config) => {
    if (!config.apiKey) {
      throw new Error("Ghasedak Api key is not recognized");
    }
    if (!config.lineNumber) {
      throw new Error("Ghasedak LineNumber is not recognized");
    }
  },
};
