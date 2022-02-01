"use strict";

/**
 * Auth.js controller
 *
 * @description: A set of functions called "actions" for managing `Auth`.
 */

/* eslint-disable no-useless-escape */
// const crypto = require("crypto");
const _ = require("lodash");
const utils = require("@strapi/utils");
const getService = (name) => {
  return strapi.plugin("users-permissions").service(name);
};
const { validateCallbackBody } = require("./validation/auth");

var validator = require("validator");

const { sanitize } = utils;
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel("plugin::users-permissions.user");

  return sanitize.contentAPI.output(user, userSchema, { auth });
};

module.exports = {
  async callback(ctx) {
    const provider = ctx.params.provider || "local";

    const params = {
      ..._.omit(ctx.request.body, [
        "confirmed",
        "confirmationToken",
        "resetPasswordToken",
        "password",
        "blocked",
        "image",
      ]),
    };
    const store = await strapi.store({
      type: "plugin",
      name: "users-permissions",
    });

    if (provider === "local") {
      if (!_.get(await store.get({ key: "grant" }), "email.enabled")) {
        throw new ApplicationError("This provider is disabled");
      }

      const settings = await store.get({
        key: "advanced",
      });

      if (!settings.allow_register) {
        throw new ApplicationError("Register action is currently disabled");
      }

      await validateCallbackBody(params);

      if (params.mobile) {
        let checkMobile = validator.isMobilePhone(params.mobile, false, {
          strictMode: true,
        });

        if (!checkMobile) throw new ValidationError("Mobile is invalid");
      }

      // Check if the user exists.
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: params });

      if (!user) {
        const role = await strapi
          .query("plugin::users-permissions.role")
          .findOne({ where: { type: settings.default_role } });

        if (!role) {
          throw new ApplicationError("Impossible to find the default role");
        }

        params.role = role.id;

        if (!settings.email_confirmation) {
          params.confirmed = true;
        }

        params.provider = "local";

        const user = await strapi
          .query("plugin::users-permissions.user")
          .create({ data: params });

        const sanitizedUser = await sanitizeUser(user, ctx);

        if (params.email) {
          try {
            let expirationDate = await getService("user").sendVerifyEmail(
              sanitizedUser
            );
            return ctx.send({ ok: true, expirationDate });
          } catch (err) {
            throw new ApplicationError(err.message);
          }
        }

        if (params.mobile) {
          try {
            let expirationDate = await getService("user").sendVerifySms(
              sanitizedUser
            );
            return ctx.send({ ok: true, expirationDate });
          } catch (err) {
            throw new ApplicationError(err.message);
          }
        }
      }

      if (user.blocked === true) {
        throw new ApplicationError(
          "Your account has been blocked by an administrator"
        );
      }

      const sanitizedUser = await sanitizeUser(user, ctx);

      if (params.email) {
        try {
          let expirationDate = await getService("user").sendVerifyEmail(
            sanitizedUser
          );
          return ctx.send({ ok: true, expirationDate });
        } catch (err) {
          throw new ApplicationError(err.message);
        }
      }

      if (params.mobile) {
        try {
          let expirationDate = await getService("user").sendVerifySms(
            sanitizedUser
          );
          return ctx.send({ ok: true, expirationDate });
        } catch (err) {
          throw new ApplicationError(err.message);
        }
      }
    } else {
      if (!_.get(await store.get({ key: "grant" }), [provider, "enabled"])) {
        throw new ApplicationError("This provider is disabled");
      }
      // Connect the user with the third-party provider.
      let user;
      let error;
      try {
        [user, error] = await getService("providers").connect(
          provider,
          ctx.query
        );
      } catch ([user, error]) {
        throw new ApplicationError(error.message);
      }

      if (!user) {
        throw new ApplicationError(error.message);
      }

      ctx.send({
        jwt: getService("jwt").issue({ id: user.id }),
        user: await sanitizeUser(user, ctx),
      });
    }
  },

  async connect(ctx, next) {
    const grant = require("grant-koa");

    const providers = await strapi
      .store({ type: "plugin", name: "users-permissions", key: "grant" })
      .get();

    const apiPrefix = strapi.config.get("api.rest.prefix");
    const grantConfig = {
      defaults: {
        prefix: `${apiPrefix}/connect`,
      },
      ...providers,
    };

    const [requestPath] = ctx.request.url.split("?");
    const provider = requestPath.split("/connect/")[1].split("/")[0];

    if (!_.get(grantConfig[provider], "enabled")) {
      throw new ApplicationError("This provider is disabled");
    }

    if (!strapi.config.server.url.startsWith("http")) {
      strapi.log.warn(
        "You are using a third party provider for login. Make sure to set an absolute url in config/server.js. More info here: https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#setting-up-the-server-url"
      );
    }

    // Ability to pass OAuth callback dynamically
    grantConfig[provider].callback =
      _.get(ctx, "query.callback") || grantConfig[provider].callback;
    grantConfig[provider].redirect_uri =
      getService("providers").buildRedirectUri(provider);

    return grant(grantConfig)(ctx, next);
  },

  async codeConfirmation(ctx) {
    const { confirmation: confirmationToken } = ctx.request.body;

    const userService = getService("user");
    const jwtService = getService("jwt");

    if (_.isEmpty(confirmationToken)) {
      throw new ValidationError("token.invalid");
    }

    const user = await userService.fetch({ confirmationToken }, []);

    if (!user) {
      throw new NotFoundError("user not found");
    }

    if (new Date(user.codeExpiration).getTime() < Date.now()) {
      const sanitizedUser = await sanitizeUser(user, ctx);

      if (user.email) {
        try {
          let expirationDate = await getService("user").sendVerifyEmail(
            sanitizedUser
          );
          return ctx.send({ ok: true, expirationDate });
        } catch (err) {
          throw new ApplicationError(err.message);
        }
      }

      if (user.mobile) {
        try {
          let expirationDate = await getService("user").sendVerifySms(
            sanitizedUser
          );
          return ctx.send({ ok: true, expirationDate });
        } catch (err) {
          throw new ApplicationError(err.message);
        }
      }
    }

    await userService.edit(user.id, {
      confirmed: true,
      confirmationToken: null,
      codeExpiration: null,
    });

    ctx.send({
      jwt: jwtService.issue({ id: user.id }),
      user: await sanitizeUser(user, ctx),
    });
  },
};
