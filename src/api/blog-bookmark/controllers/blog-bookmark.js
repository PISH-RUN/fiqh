"use strict";

/**
 *  blog-bookmark controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { validateBlogBookmarkBody } = require("./validation/blog-bookmark");

module.exports = createCoreController(
  "api::blog-bookmark.blog-bookmark",
  ({ strapi }) => ({
    async create(ctx) {
      let params = await this.sanitizeInput(ctx.request.body, ctx);

      await validateBlogBookmarkBody(params.data || {});

      params.data.user = ctx.state.user.id;

      const response = await strapi
        .service("api::blog-bookmark.blog-bookmark")
        .create(params);

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);

      return this.transformResponse(sanitizedEntity);
    },

    async delete(ctx) {
      const user = ctx.state.user.id;
      const blog = ctx.request.params.id;

      const response = await strapi
        .service("api::blog-bookmark.blog-bookmark")
        .delete({ user, blog });

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);

      return this.transformResponse(sanitizedEntity);
    },

    async userBookmarks(ctx) {
      const user = ctx.state.user.id;
      const { query } = ctx.request;

      const response = await strapi
        .service("api::blog-bookmark.blog-bookmark")
        .userBookmarks({ user }, query);

      return this.transformResponse(response);
    },

    async isBookmarkedByUser(ctx) {
      const user = ctx.state.user.id;
      const blog = ctx.request.params.id;

      const response = await strapi
        .service("api::blog-bookmark.blog-bookmark")
        .isBookmarkedByUser({ user, blog });

      return this.transformResponse(response);
    },
  })
);
