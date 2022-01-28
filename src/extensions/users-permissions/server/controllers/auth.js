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
const {
  validateCallbackBody,
  validateRegisterBody,
  validateSendEmailConfirmationBody,
} = require("./validation/auth");

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
    const params = ctx.request.body;

    const store = await strapi.store({
      type: "plugin",
      name: "users-permissions",
    });

    if (provider === "local") {
      if (!_.get(await store.get({ key: "grant" }), "email.enabled")) {
        throw new ApplicationError("This provider is disabled");
      }

      await validateCallbackBody(params);

      const query = { provider };

      // Check if the provided identifier is an email or not.
      // const isEmail = emailRegExp.test(params.identifier);

      // Set the identifier to the appropriate query field.
      if (params.email) {
        query.email = params.email.toLowerCase();
      } else {
        query.mobile = params.mobile;
      }

      // Check if the user exists.
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: query });

      if (!user) {
        throw new ValidationError("Invalid identifier or password");
      }

      if (
        _.get(await store.get({ key: "advanced" }), "email_confirmation") &&
        user.confirmed !== true
      ) {
        throw new ApplicationError("Your account email is not confirmed");
      }

      if (user.blocked === true) {
        throw new ApplicationError(
          "Your account has been blocked by an administrator"
        );
      }

      // The user never authenticated with the `local` provider.
      if (!user.password) {
        throw new ApplicationError(
          "This user never set a local password, please login with the provider used during account creation"
        );
      }

      const validPassword = await getService("user").validatePassword(
        params.password,
        user.password
      );

      if (!validPassword) {
        throw new ValidationError("Invalid identifier or password");
      } else {
        ctx.send({
          jwt: getService("jwt").issue({
            id: user.id,
          }),
          user: await sanitizeUser(user, ctx),
        });
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

  async resetPassword(ctx) {
    const params = _.assign({}, ctx.request.body, ctx.params);

    if (
      params.password &&
      params.passwordConfirmation &&
      params.password === params.passwordConfirmation &&
      params.code
    ) {
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { resetPasswordToken: `${params.code}` } });

      if (!user) {
        throw new ValidationError("Incorrect code provided");
      }

      const password = await getService("user").hashPassword({
        password: params.password,
      });

      // Update the user.
      await strapi.query("plugin::users-permissions.user").update({
        where: { id: user.id },
        data: { resetPasswordToken: null, password },
      });

      ctx.send({
        jwt: getService("jwt").issue({ id: user.id }),
        user: await sanitizeUser(user, ctx),
      });
    } else if (
      params.password &&
      params.passwordConfirmation &&
      params.password !== params.passwordConfirmation
    ) {
      throw new ValidationError("Passwords do not match");
    } else {
      throw new ValidationError("Incorrect params provided");
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

  async forgotPassword(ctx) {
    let { email, mobile } = ctx.request.body;

    if (!email && !mobile) {
      throw new ValidationError(
        "Please provide a valid email address or mobile number"
      );
    }

    if (email && mobile) {
      throw new ValidationError("Please provide only one identifier");
    }

    if (email) {
      const isEmail = emailRegExp.test(email);

      if (!isEmail) throw new ValidationError("Email is invalid");
    }

    if (mobile) {
      let checkMobile = validator.isMobilePhone(mobile, false, {
        strictMode: true,
      });

      if (!checkMobile) throw new ValidationError("Mobile is invalid");
    }

    const pluginStore = await strapi.store({
      type: "plugin",
      name: "users-permissions",
    });

    // Find the user by email or mobile.
    let identifier = email ? "email" : "mobile";
    const user = await strapi
      .query("plugin::users-permissions.user")
      .findOne({ where: { [identifier]: email || mobile } });

    // User not found.
    if (!user) {
      throw new ApplicationError("This email does not exist");
    }

    // User blocked
    if (user.blocked) {
      throw new ApplicationError("This user is disabled");
    }

    // Generate random token.
    const resetPasswordToken = (
      Math.floor(Math.random() * 90000) + 10000
    ).toString();

    // TODO Send email or sms

    if (email) {
      const settings = await pluginStore
        .get({ key: "email" })
        .then((storeEmail) => {
          try {
            return storeEmail["reset_password"].options;
          } catch (error) {
            return {};
          }
        });

      const advanced = await pluginStore.get({
        key: "advanced",
      });

      const userInfo = await sanitizeUser(user, ctx);

      settings.message = await getService("users-permissions").template(
        settings.message,
        {
          URL: advanced.email_reset_password,
          USER: userInfo,
          TOKEN: resetPasswordToken,
        }
      );

      settings.object = await getService("users-permissions").template(
        settings.object,
        {
          USER: userInfo,
        }
      );

      // Send an email to the user.
      try {
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: user.email,
            from:
              settings.from.email || settings.from.name
                ? `${settings.from.name} <${settings.from.email}>`
                : undefined,
            replyTo: settings.response_email,
            subject: settings.object,
            text: settings.message,
            html: settings.message,
          });
      } catch (err) {
        throw new ApplicationError(err.message);
      }
    } else {
      try {
        let message = `Reset password code is: ${resetPasswordToken}`;

        strapi
          .plugin("ghasedak-sms")
          .service("myService")
          .sendSms({ message, receptor: user.mobile });
      } catch (err) {
        throw new ApplicationError(err.message);
      }
    }

    // Update the user.
    await strapi
      .query("plugin::users-permissions.user")
      .update({ where: { id: user.id }, data: { resetPasswordToken } });

    ctx.send({ ok: true });
  },

  async register(ctx) {
    const pluginStore = await strapi.store({
      type: "plugin",
      name: "users-permissions",
    });

    const settings = await pluginStore.get({
      key: "advanced",
    });

    if (!settings.allow_register) {
      throw new ApplicationError("Register action is currently disabled");
    }

    const params = {
      ..._.omit(ctx.request.body, [
        "confirmed",
        "confirmationToken",
        "resetPasswordToken",
      ]),
      provider: "local",
    };

    await validateRegisterBody(params);

    // Throw an error if the password selected by the user
    // contains more than three times the symbol '$'.
    if (getService("user").isHashed(params.password)) {
      throw new ValidationError(
        "Your password cannot contain more than three times the symbol `$`"
      );
    }

    const role = await strapi
      .query("plugin::users-permissions.role")
      .findOne({ where: { type: settings.default_role } });

    if (!role) {
      throw new ApplicationError("Impossible to find the default role");
    }

    params.role = role.id;
    params.password = await getService("user").hashPassword(params);

    if (params.email) {
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { email: params.email },
        });

      if (user && user.provider === params.provider) {
        throw new ApplicationError("Email is already taken");
      }

      if (user && user.provider !== params.provider && settings.unique_email) {
        throw new ApplicationError("Email is already taken");
      }
    } else {
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { mobile: params.mobile },
        });

      if (user) {
        throw new ApplicationError("Mobile is already taken");
      }
    }

    try {
      if (!settings.email_confirmation) {
        params.confirmed = true;
      }

      if (params.mobile) {
        let checkMobile = validator.isMobilePhone(params.mobile, false, {
          strictMode: true,
        });

        if (!checkMobile) throw new ValidationError("Mobile is invalid");
      }

      const user = await strapi
        .query("plugin::users-permissions.user")
        .create({ data: params });

      const sanitizedUser = await sanitizeUser(user, ctx);

      if (settings.email_confirmation && params.email) {
        try {
          await getService("user").sendConfirmationEmail(sanitizedUser);
        } catch (err) {
          throw new ApplicationError(err.message);
        }

        return ctx.send({ user: sanitizedUser });
      }

      if (params.mobile) {
        try {
          await getService("user").sendSms(sanitizedUser);
        } catch (err) {
          throw new ApplicationError(err.message);
        }

        return ctx.send({ user: sanitizedUser });
      }

      const jwt = getService("jwt").issue(_.pick(user, ["id"]));

      return ctx.send({
        jwt,
        user: sanitizedUser,
      });
    } catch (err) {
      if (_.includes(err.message, "username")) {
        throw new ApplicationError("Username already taken");
      } else {
        throw new ApplicationError(err.message || "Email already taken");
      }
    }
  },

  async emailConfirmation(ctx, next, returnUser) {
    const { confirmation: confirmationToken } = ctx.query;

    const userService = getService("user");
    const jwtService = getService("jwt");

    if (_.isEmpty(confirmationToken)) {
      throw new ValidationError("token.invalid");
    }

    const user = await userService.fetch({ confirmationToken }, []);

    if (!user) {
      throw new ValidationError("token.invalid");
    }

    if (new Date(user.codeExpiration).getTime() < Date.now()) {
      const sanitizedUser = await sanitizeUser(user, ctx);

      if (user.email) {
        try {
          await getService("user").sendConfirmationEmail(sanitizedUser);
        } catch (err) {
          throw new ApplicationError(err.message);
        }
      }

      if (user.mobile) {
        try {
          await getService("user").sendSms(sanitizedUser);
        } catch (err) {
          throw new ApplicationError(err.message);
        }
      }

      return ctx.send({ sent: true });
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

  async sendEmailConfirmation(ctx) {
    const params = _.assign(ctx.request.body);

    await validateSendEmailConfirmationBody(params);

    let identifier = params.email ? "email" : "mobile";

    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: { [identifier]: params.email || params.mobile },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    if (user.confirmed) {
      throw new ApplicationError("already.confirmed");
    }

    if (user.blocked) {
      throw new ApplicationError("blocked.user");
    }

    try {
      if (params.email) {
        await getService("user").sendConfirmationEmail(user);
      } else {
        await getService("user").sendSms(user);
      }

      ctx.send({
        [identifier]: params.email || params.mobile,
        sent: true,
      });
    } catch (err) {
      throw new ApplicationError(err.message);
    }
  },
};
