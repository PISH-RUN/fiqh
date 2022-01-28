"use strict";

/**
 * blog-bookmark service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

const utils = require("@strapi/utils");

const { ApplicationError, NotFoundError } = utils.errors;

module.exports = createCoreService(
  "api::blog-bookmark.blog-bookmark",
  ({ strapi }) => ({
    async create(params) {
      const blog = await strapi.entityService.findOne(
        "api::blog.blog",
        params.data.blog
      );

      if (!blog) throw new NotFoundError("Blog not found");

      const blogBookmark = await strapi
        .query("api::blog-bookmark.blog-bookmark")
        .findOne({
          where: { user: params.data.user, blog: params.data.blog },
        });

      if (blogBookmark) {
        throw new ApplicationError("Blog already bookmarked");
      }

      const result = await strapi
        .query("api::blog-bookmark.blog-bookmark")
        .create(params);

      return result;
    },

    async delete(params) {
      const result = await strapi
        .query("api::blog-bookmark.blog-bookmark")
        .delete({
          where: { user: params.user, blog: params.blog },
        });

      return result;
    },

    async userBookmarks(params, query) {
      const santizedQuery = { ...query, filters: params };

      const result = await strapi.entityService.findMany(
        "api::blog-bookmark.blog-bookmark",
        santizedQuery
      );

      return result;
    },

    async isBookmarkedByUser(params) {
      const result = await strapi
        .query("api::blog-bookmark.blog-bookmark")
        .findOne({
          where: params,
        });

      return result;
    },
  })
);
