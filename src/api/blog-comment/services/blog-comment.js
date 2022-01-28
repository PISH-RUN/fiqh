"use strict";

/**
 * blog-comment service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

const utils = require("@strapi/utils");

const { NotFoundError } = utils.errors;

module.exports = createCoreService(
  "api::blog-comment.blog-comment",
  ({ strapi }) => ({
    async create(params) {
      const blog = await strapi.entityService.findOne(
        "api::blog.blog",
        params.data.blog
      );

      if (!blog) {
        throw new NotFoundError("Blog not found");
      }

      if (params.data.comment) {
        delete params.data.blog;
      }

      const result = await strapi
        .query("api::blog-comment.blog-comment")
        .create(params);

      await strapi.entityService.update("api::blog.blog", blog.id, {
        data: {
          commentCount: blog.commentCount + 1,
        },
      });

      return result;
    },

    async deleteByUser(params) {
      const blog = await strapi.entityService.findOne(
        "api::blog.blog",
        params.blog
      );

      if (!blog) {
        throw new NotFoundError("Blog not found");
      }

      const result = await strapi
        .query("api::blog-comment.blog-comment")
        .delete({
          where: { id: params.id, user: params.user, blog: params.blog },
        });

      if (result) {
        await strapi.entityService.update("api::blog.blog", params.blog, {
          data: {
            commentCount: blog.commentCount - 1,
          },
        });
      }

      return result;
    },
  })
);
