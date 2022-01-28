"use strict";

/**
 *  blog-comment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { validateCommentBody } = require("./validation/blog-comment");

module.exports = createCoreController(
  "api::blog-comment.blog-comment",
  ({ strapi }) => ({
    async create(ctx) {
      let params = await this.sanitizeInput(ctx.request.body, ctx);

      const user = ctx.state.user.id;

      await validateCommentBody(params.data || {});

      params.data.user = user;

      const response = await strapi
        .service("api::blog-comment.blog-comment")
        .create(params);

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);

      return this.transformResponse(sanitizedEntity);
    },

    async deleteByUser(ctx) {
      const user = ctx.state.user.id;
      const { blog, id } = ctx.request.params;

      const response = await strapi
        .service("api::blog-comment.blog-comment")
        .deleteByUser({ user, blog, id });

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
