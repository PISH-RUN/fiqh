"use strict";

/**
 *  blog-comment-vote controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { validateCommentVoteBody } = require("./validation/blog-comment-vote");

module.exports = createCoreController(
  "api::blog-comment-vote.blog-comment-vote",
  ({ strapi }) => ({
    async create(ctx) {
      let params = await this.sanitizeInput(ctx.request.body, ctx);

      const user = ctx.state.user.id;

      await validateCommentVoteBody(params.data || {});

      params.data.user = user;

      const response = await strapi
        .service("api::blog-comment-vote.blog-comment-vote")
        .create(params);

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);

      return this.transformResponse(sanitizedEntity);
    },
    async delete(ctx) {
      const user = ctx.state.user.id;
      const blog_comment = ctx.request.params.id;
      const response = await strapi
        .service("api::blog-comment-vote.blog-comment-vote")
        .delete({ user, blog_comment });

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
