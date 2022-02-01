"use strict";

module.exports = [
  {
    method: "GET",
    path: "/connect/(.*)",
    handler: "auth.connect",
    config: {
      middlewares: ["plugin::users-permissions.rateLimit"],
      prefix: "",
    },
  },
  {
    method: "POST",
    path: "/auth/local",
    handler: "auth.callback",
    config: {
      middlewares: ["plugin::users-permissions.rateLimit"],
      prefix: "",
    },
  },
  {
    method: "GET",
    path: "/auth/:provider/callback",
    handler: "auth.callback",
    config: {
      prefix: "",
    },
  },
  {
    method: "POST",
    path: "/auth/confirm-code",
    handler: "auth.codeConfirmation",
    config: {
      prefix: "",
    },
  },
];
