"use strict";

module.exports = {
  default: ({ env }) => ({
    apiKey: env("GHASEDAK_API_KEY"),
    lineNumber: env("GHASEDAK_LINE_NUMBER"),
  }),
  validator: (config) => {
    if (!config.apiKey) {
      throw new Error("GHASEDAK_API_KEY is missing");
    }
    if (!config.lineNumber) {
      throw new Error("GHASEDAK_LINE_NUMBER is missing");
    }
  },
};
