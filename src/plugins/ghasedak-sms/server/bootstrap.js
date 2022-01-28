"use strict";

const axios = require("axios");
const qs = require("qs");

class Request {
  constructor() {}
  request(reqpath, data) {
    let reqfullpath = this.__apiVersion + reqpath;

    let params = qs.stringify(data);
    let config = {
      method: "post",
      url: `https://${this.__apiBase}${reqfullpath}`,
      headers: {
        apikey: this.__apiKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: params,
    };

    axios(config)
      .then(function (response) {
        console.log("Sms is sent to: " + data.receptor);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

class Ghasedak extends Request {
  constructor(apiKey, apiVersion = "/v2", apiBase = "api.ghasedak.me") {
    super();
    this.__apiKey = apiKey;
    this.__apiVersion = apiVersion;
    this.__apiBase = apiBase;
  }

  send(opts) {
    if (!opts.hasOwnProperty("message")) {
      console.log(" message is required.");
      return;
    } else {
      this.__message = opts.message;
    }

    if (!opts.hasOwnProperty("receptor")) {
      console.log("receptor is required.");
      return;
    } else {
      this.__receptor = opts.receptor;
    }

    this.request("/sms/send/simple", {
      message: this.__message,
      receptor: this.__receptor,
      linenumber: opts.linenumber,
      senddate: opts.senddate,
      checkid: opts.checkid,
    });
  }
}

module.exports = ({ strapi }) => {
  const { apiKey } = strapi.config.get("plugin.ghasedak-sms");

  strapi.plugin("ghasedak-sms").Ghasedak = new Ghasedak(apiKey);
};
