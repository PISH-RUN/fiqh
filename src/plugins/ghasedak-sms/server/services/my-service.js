"use strict";

module.exports = ({ strapi }) => ({
  sendSms({ message, receptor } = {}) {
    const { lineNumber } = strapi.config.get("plugin.ghasedak-sms");

    return strapi.plugin("ghasedak-sms").Ghasedak.send({
      message,
      receptor: receptor,
      linenumber: lineNumber,
    });
  },
});
