"use strict";

/**
 *  blog-rate controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { validateBlogRateBody } = require("./validation/blog-rate");

module.exports = createCoreController(
  "api::blog-rate.blog-rate",
  ({ strapi }) => ({
    async create(ctx) {
      let params = await this.sanitizeInput(ctx.request.body, ctx);

      const user = ctx.state.user.id;

      await validateBlogRateBody(params.data || {});

      params.data.user = user;

      const response = await strapi
        .service("api::blog-rate.blog-rate")
        .create(params);

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
